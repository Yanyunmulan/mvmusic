<template>
  <div class="progress" :class="{ progress__playing: isPlaying }">
    <!-- <video autoplay loop muted playsinline class="video-background2">
				<source src="../assets/t1.mp4" type="video/mp4">
				Your browser does not support the video element.
			</video> -->
    <h2 class="progress_title">{{ name | formatName }}</h2>
    <p class="progress_text">
      {{ position | formatTime }} / {{ duration | formatTime }}
    </p>
    <div class="progress_line">
      <span :style="{ width: progress }" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { player } from '../player'
export default {
  data () {
    return {
      name: '',
      position: 0,
      duration: 267,
      progress: ''
    }
  },
  computed: {
    ...mapState(['isPlaying'])
  },
  filters: {
    formatTime (val) {
      const min = Math.floor(val / 60)
      const sec = Math.floor(val % 60)
      return `${min}:${sec < 10 ? '0' : ''}${sec}`
    },
    formatName (val) {
      return val.replace(/\.mp3$/, '')
    }
  },
  mounted () {
    const draw = () => {
      requestAnimationFrame(draw)
      const progress = this.position / this.duration
      this.progress = `${(progress * 100).toFixed(2)}%`
      if (this.isPlaying) {
        this.position = this.position + 0.01
      }
      this.duration = this.duration
      this.name = '随风'
    }
    draw()    
  }
}
</script>

<style lang="scss">
.progress {
  padding-left: 123px;
  padding-right: 12px;
  backdrop-filter: blur(40px);
  height: 100%;
  border-radius: 6px 6px 0 0;
  background-color: rgba(255, 255, 255, 0.631);
  // overflow: hidden;
  transition: all 0.6s ease;
}
.progress__playing {
  // overflow: hidden;
  transform: translateY(-100%);
}
.progress_title {
  padding-top: 6px;
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.progress_text {
  padding-top: 2px;
  padding-left: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #7c7c7c;
  transform: scale(0.6);
  transform-origin: left top;
}
.progress_line {
  height: 3px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #ddd;
}
.progress_line span {
  display: block;
  height: 100%;
  background-color: #ec51a5;
}
// .video-background2 {
// //   position: absolute;
// //   top: 0;
// //   left: 0;
//   width: 100%;
//   height: auto;
//   object-fit: cover; /* 视频将填充整个容器 */
//   // z-index: -2;
// }
</style>

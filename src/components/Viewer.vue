<template>
	<div class="view" :class="{ view__playing: isPlaying }">
		<!-- <video src="./test.mp4"></video> -->
		<!-- <div v-if="isPlaying" class="content"> -->
		
			<!-- <img v-if="isPlaying" src="../assets/cover.jpg" /> -->
			<!-- <video src='../assets/t1.mp4'></video> -->

			<video autoplay loop muted playsinline class="video-background">
				<source src="../assets/t2.mp4" type="video/mp4">
				Your browser does not support the video element.
			</video>
		
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['isPlaying'])
  },



}
</script>

<style lang="scss">
.view {
	// display: none;
	max-width: 300px;
	max-height: 400px;
	width: 300px;
	height: 0px;
	border-radius: 8px;
	// opacity: 0;
	// background-color: #fff;
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2),
		0 20px 20px rgba(95, 23, 101, 0.2);

	overflow: hidden;
	// z-index: -2;
	transition: all 0.6s ease;
}


.view__playing {
	// display: none;

	opacity: 1;
	height: 400px;
	overflow: hidden;


}

.video-background {
//   position: absolute;
//   top: 0;
//   left: 0;
  width: 100%;
  height: auto;
  object-fit: cover; /* 视频将填充整个容器 */
//   z-index: -1;
}






</style>
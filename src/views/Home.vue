<template>
	<div class="home">
		<div id="viewer">
      		<viewer id="v1"></viewer>
			<Player id="p1" />
    	</div>
		
	</div>

</template>

<script>
	import Player from '../components/Player.vue'
	import Viewer from '../components/Viewer.vue'
	export default{
		components:{
			Player,
			Viewer
		}
	}
</script>

<style lang="scss">
	.home{
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: #ffedff;
		
		
	}
	#viewer {
		position: absolute;
		bottom: 20%;
		
	}
	#v1 {
		margin-bottom: 80px;
		// z-index: -2;
		// background-color: #692222;
		// border: #692222;
		// max-width: 300px;
		// max-height: 400px;
		// width: 60vw;
		// height: 80vw;
		
	}

	#p1 {
		// z-index: 2;
	}
</style>
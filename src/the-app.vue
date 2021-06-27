<template>
	<div
		class="is-centered is-full-height main-background scrollbar-hidden"
	>
		<wa-login-form
			class="login-size"
		/>
	</div>
</template>

<script>
import WaLoginForm from './components/wa-login-form';
export default {
	components: { WaLoginForm },
};
</script>

<style lang="scss" scoped>
	@import './src/style/utils.scss';
	.login-size{
		width: 70vh;
		max-height: 80vh;
	}
	.main-background{
		background: url("resources/background.jpg");
	}
	.scrollbar-hidden {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hidden::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-device-width: $tablet-width){
		.login-size{
			width: 90vw;
		}
	}
</style>

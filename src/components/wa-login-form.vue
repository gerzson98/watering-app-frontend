<template>
	<form
		class="has-background-white has-strong-shadow is-rounded-default is-list-column pr-6 pl-6"
		@submit.prevent="logIn"
	>
		<h1 class="title is-align-self-center mt-3">
			{{ $t('logIn.title') }}
		</h1>
		<label class="label">
			{{ $t('logIn.userName.label') }}
		</label>
		<input
			v-model="userName"
			class="input is-success is-rounded-small m-0"
			:class="{'is-danger': errors.userName && showError.userName}"
			:placeholder="$t('logIn.userName.placeholder')"
			@blur="showErrorOn('userName')"
		>
		<div class="is-centered is-full-width">
			<label
				:style="{ visibility: (errors.userName && showError.userName)? 'visible' : 'hidden' }"
				class="help is-danger is-centered mt-2"
			>
				{{ $t('logIn.userName.error') }}
			</label>
		</div>
		<label class="label">
			{{ $t('logIn.password.label') }}
		</label>
		<input
			v-model="password"
			type="password"
			class="input is-success is-rounded-small m-0"
			:class="{ 'is-danger': errors.password && showError.password }"
			:placeholder="$t('logIn.password.placeholder')"
			@blur="showErrorOn('password')"
		>
		<div class="is-centered is-full-width">
			<label
				:style="{ visibility: (errors.password && showError.password)? 'visible' : 'hidden' }"
				class="help is-danger is-centered mt-0"
			>
				{{ $t('logIn.password.error') }}
			</label>
		</div>
		<div class="is-centered is-full-width mt-3 mb-2">
			<button
				type="submit"
				class="button is-success has-width-60 is-rounded-default mb-0"
				:class="{ 'is-light': !isValid }"
				:disabled="!isValid"
			>
				{{ $t('logIn.submitButton') }}
			</button>
		</div>
		<div class="is-centered is-full-width m-0">
			<a class="help is-success is-link is-underlined mt-0 mb-3">
				{{ $t('logIn.registerLink') }}
			</a>
		</div>
	</form>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	name: 'WaLoginForm',
	setup() {
		const userName = ref('');
		const password = ref('');

		const errors = computed(() => {
			return {
				userName: userName.value.length < 4 || userName.value.length > 32,
				password: password.value.length < 8 || password.value.length > 64,
			};
		});
		const isValid = computed(() => !Object.getOwnPropertyNames(errors.value).find(prop => errors.value[prop]) );

		const showError = reactive({ userName: false, password: false });
		const showErrorOn = (prop) => { showError[prop] = true; };

		const logIn = () => {
			if (!isValid.value) {
				showErrorOn('userName');
				showErrorOn('password');
			}
		};
		return {
			userName, password, errors, showError, isValid,
			logIn, showErrorOn,
		};
	},
};
</script>

<style lang="scss" scoped> @import '../style/utils'; </style>

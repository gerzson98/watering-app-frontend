export function Store({ api }) { // eslint-disable-line no-unused-vars
	const state = {
		lastNotification: {
			show: false,
			duration: 4,
			text: 'error',
			type: 'success',
		},
	};

	const getters = {
	};

	const mutations = {
		setNotification(state, notification) {
			state.lastNotification = { ...notification };
		},
	};

	const actions = {
		clearNotification({ commit }) {
			commit('setNotification', { show: false });
		},
		throwNotification({ commit }, { text, type = 'success', duration = 4 }) {
			commit('setNotification', { text, duration, type, show: true });
			const self = this;
			setTimeout(() => self.dispatch('clearNotification'), duration * 1000);
		},
	};

	return { state, getters, mutations, actions };
}

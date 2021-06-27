import { FontAwesomeIcon } from '@riovir/wc-fontawesome';
import TsNotification from './ts-notification';

customElements.define('fa-icon', FontAwesomeIcon);

export function widgets(Vue) {
	Vue.component(TsNotification.name, TsNotification);
}


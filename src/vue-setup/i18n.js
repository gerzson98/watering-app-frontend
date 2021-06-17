import { createI18n } from 'vue-i18n';

import en from '../resources/en-us';

export const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: { en },
});

export async function fetchTranslations({
	locale,
	languageCode = locale,
}) {
	const translation = await import(/* webpackChunkName: "lang-[request]" */ `src/resources/${locale}`);
	i18n.global.setLocaleMessage(languageCode, translation.default);
}

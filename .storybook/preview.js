import 'src/style/main.scss';
import './fix-prismjs-js.css';

import { app } from '@storybook/vue3';
import { i18n, widgets } from 'src/vue-setup';

app.use(i18n).use(widgets);

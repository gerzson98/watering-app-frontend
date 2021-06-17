import { library } from '@fortawesome/fontawesome-svg-core';
import TdIcon from './td-icon';

export default { title: 'widgets / td-icon', component: TdIcon };

const play = {
	prefix: 'td',
	iconName: 'play',
	icon: [512, 512, [], 'f005', 'M136 48.154L496 256L136 463.846L136 48.154'],
};
library.add(play);

const Template = args => ({
	template: `
		<td-icon :icon="icon" :size="size" :mask="mask" :transform="transform" :spin="spin" />
	`,
	setup: () => args,
});

export const base = Template.bind({});
base.args = { icon: play, size: '1x', mask: '', transform: '', spin: false };

export const iconByName = Template.bind({});
iconByName.args = { ...base.args, icon: 'play' };

export const size = Template.bind({});
size.args = { ...base.args, size: '2x' };

export const mask = Template.bind({});
mask.args = { ...base.args, mask: play, transform: 'shrink-8 rotate-180', size: '3x' };

export const spin = Template.bind({});
spin.args = { ...mask.args, spin: true };

// VDivider.stories.js

import VDivider from "../components/Others/VDivider.vue";

export default {
    title: 'Components/VDivider',
    component: VDivider,
    argTypes: {
        type: { control: 'text' },
        color: { control: 'text' },
        opacity: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VDivider },
    props: Object.keys(argTypes),
    template: `
    <VDivider
      v-bind="{
        type,
        color,
        opacity
      }"
    />
  `,
});

export const InsetDivider = Template.bind({});
InsetDivider.args = {
    type: 'inset',
    color: 'grey',
    opacity: '100',
};

export const VerticalDivider = Template.bind({});
VerticalDivider.args = {
    type: 'vertical',
    color: 'grey',
    opacity: '100',
};

export const DefaultDivider = Template.bind({});
DefaultDivider.args = {
    type: 'default',
    color: 'grey',
    opacity: '100',
};

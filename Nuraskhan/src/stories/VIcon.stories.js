import VIcon from "../components/Icons/VIcon.vue";
export default {
    title: 'Components/VIcon',
    component: VIcon,
    argTypes: {
        size: { control: { type: 'select', options: ['x-small', 'small', 'medium', 'large', 'x-large'] } },
        color: { control: { type: 'select', options: ['grey', 'success', 'info', 'warning', 'error'] } },
        src: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VIcon },
    props: Object.keys(argTypes),
    template: `
    <VIcon
      v-bind="{
        size,
        color,
        src
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    size: 'small',
    color: 'grey',
    src: 'path-to-your-icon-image.png',
};
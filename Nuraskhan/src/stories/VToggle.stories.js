import VToggle from "../components/Toggles/VToggle.vue";
export default {
    title: 'Components/VToggle',
    component: VToggle,
    argTypes: {
        modelValue: { control: 'boolean' },
        isActive: { control: 'boolean' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VToggle },
    props: Object.keys(argTypes),
    template: `
    <VToggle
      v-bind="{
        modelValue,
        isActive
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: true,
    isActive: true,
};
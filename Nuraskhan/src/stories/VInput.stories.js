import VInput from "../components/Inputs/VInput.vue";
export default {
    title: 'Components/VInput',
    component: VInput,
    argTypes: {
        modelValue: { control: 'text' },
        placeholder: { control: 'text' },
        type: { control: { type: 'select', options: ['text', 'textarea', 'tel', 'password', 'email', 'search'] } },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VInput },
    props: Object.keys(argTypes),
    template: `
    <VInput
      v-bind="{
        modelValue,
        placeholder,
        type
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: 'defaultInputValue',
    placeholder: 'Enter text...',
    type: 'text',
};
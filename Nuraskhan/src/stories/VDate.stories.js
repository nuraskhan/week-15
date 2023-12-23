import VDate from "../components/Inputs/VDate.vue";
export default {
    title: 'Components/VDate',
    component: VDate,
    argTypes: {
        modelValue: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VDate },
    props: Object.keys(argTypes),
    template: `
    <VDate
      v-bind="{
        modelValue
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: 'defaultDateValue',
};
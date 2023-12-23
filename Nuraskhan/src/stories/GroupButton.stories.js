import GroupButton from "../components/Buttons/GroupButton.vue";
export default {
    title: 'Components/GroupButton',
    component: GroupButton,
    argTypes: {
        modelValue: { control: 'text' },
        data: { control: 'object' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { GroupButton },
    props: Object.keys(argTypes),
    template: `
    <GroupButton
      v-bind="{
        modelValue,
        data
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: '', // Add your default model value
    data: ['Button 1', 'Button 2', 'Button 3'], // Add your default data array
};
import VSelect from "../components/Selects/VSelect.vue";

export default {
    title: 'Components/VSelect',
    component: VSelect,
    argTypes: {
        modelValue: { control: 'text' },
        label: { control: 'text' },
        name: { control: 'text' },
        data: { control: 'array' },
        variant: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VSelect },
    props: Object.keys(argTypes),
    template: `
    <VSelect
      v-bind="{
        modelValue,
        label,
        name,
        data,
        variant
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: 'defaultValue',
    label: 'Select Label',
    name: 'selectName',
    data: ['Option 1', 'Option 2', 'Option 3'],
    variant: 'defaultVariant',
};
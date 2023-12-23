import VRadio from "../components/Radio/VRadio.vue";
export default {
    title: 'Components/VRadio',
    component: VRadio,
    argTypes: {
        moduleValue: { control: 'text' },
        label: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VRadio },
    props: Object.keys(argTypes),
    template: `
    <VRadio
      v-bind="{
        moduleValue,
        label
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    moduleValue: 'defaultModuleValue',
    label: 'Default Radio',
};
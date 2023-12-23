// VCheckbox.stories.js
import VCheckbox from "../components/Checkbox/VCheckbox.vue";

export default {
    title: 'Components/VCheckbox',
    component: VCheckbox,
    argTypes: {
        moduleValue: { control: 'text' },
        label: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VCheckbox },
    props: Object.keys(argTypes),
    template: `
    <VCheckbox
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
    label: 'Default Checkbox Label',
};

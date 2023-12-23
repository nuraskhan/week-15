// VFile.stories.js

import VFile from "../components/Inputs/VFile.vue";
export default {
    title: 'Components/VFile',
    component: VFile,
    argTypes: {
        modelValue: { control: 'object' },
        label: { control: 'text' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VFile },
    props: Object.keys(argTypes),
    template: `
    <VFile
      v-bind="{
        modelValue,
        label
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: null,
    label: 'File Upload',
};

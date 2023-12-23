import VDropDownButton from "../components/Buttons/VDropDownButton.vue";
export default {
    title: 'Components/VDropDownButton',
    component: VDropDownButton,
    argTypes: {
        icons: { control: 'object' },
        data: { control: 'object' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VDropDownButton },
    props: Object.keys(argTypes),
    template: `
    <VDropDownButton
      v-bind="{
        icons,
        data
      }"
    >
      <!-- You can add slot content here if needed -->
    </VDropDownButton>
  `,
});

export const Default = Template.bind({});
Default.args = {
    icons: [], // Add your default icon array
    data: [], // Add your default data array
};
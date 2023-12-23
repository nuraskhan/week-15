import VSpinner from "../components/Others/Spinner.vue";
export default {
    title: 'Components/VSpinner',
    component: VSpinner,
    argTypes: {
        size: { control: 'text' },
        lineSize: { control: 'number' },
        lineBgColor: { control: 'color' },
        lineFgColor: { control: 'color' },
        speed: { control: 'number' },
        spacing: { control: 'number' },
        message: { control: 'text' },
        fontSize: { control: 'number' },
        textFgColor: { control: 'color' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { VSpinner },
    props: Object.keys(argTypes),
    template: `
    <VSpinner
      v-bind="{
        size,
        lineSize,
        lineBgColor,
        lineFgColor,
        speed,
        spacing,
        message,
        fontSize,
        textFgColor
      }"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    lineSize: 3,
    lineBgColor: '#eee',
    lineFgColor: '#2196f3',
    speed: 0.8,
    spacing: 4,
    message: '',
    fontSize: 13,
    textFgColor: '#555',
};
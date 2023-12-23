// VButton.stories.js

import VButton from '../components/Buttons/VButton.vue';

export default {
    title: 'VButton',
    component: VButton,
    argTypes: {
        size: { control: 'number' },
        loading:{ control: 'string' },
        rounded:{ control: 'number' },
        padding:{ control: 'number' },
        paddingX:{ control: 'number' },
        paddingY:{ control: 'number' },
        variant:{ control: 'string' }
    },
};

const Template = (args, { argTypes }) => ({
    components: { VButton },
    props: Object.keys(argTypes),
    template: '<VButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    size: 20,

};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
    size: 20,
    leftIcon: 'YourLeftIconComponent',
};


import { StoryFn } from "@storybook/vue3";
import type ToggleInterface from "../../../components/Toggle/Toggle.vue";
import Toggle from "../../../components/Toggle/Toggle.vue";
import { toggleEnum } from "../../../components/Toggle/toggleEnum";

const Template: StoryFn<ToggleInterface> = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

export const CommonToggle = Template.bind({});

CommonToggle.args = {
  checked: true,
  disabled: true,
  label: "test",
};

CommonToggle.argTypes = {
  size: {
    control: { type: "select" },
    options: toggleEnum,
  },
};

CommonToggle.story = {
  parameters: {
    controls: {
      exclude: ["onChange", "className"],
    },
    design: {
      type: "figma",
      // eslint-disable-next-line max-len
      url: "https://www.figma.com/file/W1Wh3vSiCSWWFTfkxiC6Z1/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0-Share-Full?node-id=78%3A1454",
    },
  },
};

export default {
  component: Toggle,
  title: "Atomic/Toggle",
};

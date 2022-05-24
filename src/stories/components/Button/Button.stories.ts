import { StoryFn } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";
import { ChevronRight, ChevronLeft } from "northy-icons";
import type ButtonInterface from "../../../components/Buttons/Button.vue";
import Button from "../../../components/Buttons/Button.vue";
import {
  accentEnum,
  buttonSizeEnum,
  decorationEnum,
} from "../../../components/Buttons/buttonEnum";

const Template: StoryFn<ButtonInterface> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const CommonButton = Template.bind({});

CommonButton.args = {
  accent: accentEnum.Secondary,
  className: "props-className",
  decoration: decorationEnum.Default,
  label: "В корзину",
  leftIcon: ChevronLeft,
  onButtonClick: action("onButtonClick"),
  onLeftIconClick: action("onLeftIconClick"),
  onRightIconClick: action("onRightIconClick"),
  rightIcon: ChevronRight,
  size: buttonSizeEnum.Small,
};

CommonButton.argTypes = {
  accent: {
    control: { type: "select" },
    options: accentEnum,
  },
  decoration: {
    control: { type: "select" },
    options: decorationEnum,
  },
  isLeftIcon: {
    control: { type: "boolean" },
  },
  isRightIcon: {
    control: { type: "boolean" },
  },
  muted: {
    control: { type: "boolean" },
  },
  size: {
    control: { type: "select" },
    options: buttonSizeEnum,
  },
};

CommonButton.story = {
  parameters: {
    controls: {
      exclude: [
        "onButtonClick",
        "rightIcon",
        "leftIcon",
        "onRightIconClick",
        "onLeftIconClick",
      ],
    },
    design: {
      type: "figma",
      // eslint-disable-next-line max-len
      url: "https://www.figma.com/file/W1Wh3vSiCSWWFTfkxiC6Z1/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0-Share-Full?node-id=222%3A1",
    },
  },
};

export default {
  component: Button,
  title: "Atomic/Button",
};

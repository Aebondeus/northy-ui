<script setup lang="ts">
import { VueElement, Ref } from "vue";
import { accentEnum, buttonSizeEnum, decorationEnum } from "./buttonEnum";
import { buttonClassHandler } from "./utils";

export interface ButtonInterface {
  label?: Ref<string | number> | string;
  className?: string;
  onButtonClick?: () => void;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  leftIcon?: VueElement;
  onLeftIconClick: () => void;
  onRightIconClick: () => void;
  rightIcon?: VueElement;
  size: buttonSizeEnum;
  accent?: accentEnum;
  decoration?: decorationEnum;
  muted: boolean;
}

const props = withDefaults(defineProps<ButtonInterface>(), {
  accent: accentEnum.Primary,
  decoration: decorationEnum.Default,
  muted: false,
  size: buttonSizeEnum.Medium,
});

const isButtonHidden = !(
  props.label ||
  (props.isLeftIcon && props.leftIcon) ||
  (props.isRightIcon && props.rightIcon)
);
const shouldUseButtonClick = !(props.isLeftIcon || props.isRightIcon);

const buttonClass = buttonClassHandler(
  props.accent,
  props.size,
  props.decoration,
  props.muted,
  props.className
);
</script>

<template>
  <button
    v-on="{ click: shouldUseButtonClick ? props.onButtonClick : null }"
    :class="buttonClass"
    :style="isButtonHidden && { display: 'none' }"
  >
    <button
      @click.stop="props.onLeftIconClick"
      class="northy-ui-btn-inner-btn"
      v-if="props.isLeftIcon"
    >
      <component :is="props.leftIcon" />
    </button>
    <div v-if="props.label">
      <span class="northy-ui-btn-label">{{ props.label }}</span>
    </div>
    <button
      @click.stop="props.onRightIconClick"
      class="northy-ui-btn-inner-btn"
      v-if="props.isRightIcon"
    >
      <component :is="props.rightIcon" />
    </button>
  </button>
</template>

<style lang="scss">
@import "./style.scss";
</style>

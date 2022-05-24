<script setup lang="ts">
import { defineProps } from "vue";
import { toggleEnum } from "./toggleEnum";
import { toggleClassHandler } from "./utils";

export interface ToggleInterface {
  className?: string;
  onChange?: (event: Event) => void;
  label?: string;
  checked?: boolean;
  disabled: boolean;
  size: toggleEnum;
}

const props = withDefaults(defineProps<ToggleInterface>(), {
  disabled: false,
  size: toggleEnum.Medium,
});

const { toggleClass, toggleSwitchClass } = toggleClassHandler(
  props.size,
  props.className
);
</script>

<template>
  <label class="northy-ui-toggle-wrapper">
    <input
      type="checkbox"
      @change="props.onChange"
      :class="toggleClass"
      :disabled="props.disabled"
      :checked="props.checked"
    />
    <span :class="toggleSwitchClass" />
    <span v-if="props.label">
      <span class="northy-ui-toggle-label">{{ props.label }}</span>
    </span>
  </label>
</template>

<style lang="scss">
@import "../../styles/colors.scss";

.northy-ui-toggle-wrapper {
  display: inline-flex;
  align-items: center;

  .northy-ui-toggle {
    opacity: 0;
    position: absolute;
  }

  .northy-ui-toggle-switch {
    display: flex;
    background-color: $grayscale-more-light;
    border: 1px solid $grayscale-slight-hard;
    border-radius: 32px;
    align-items: center;
    padding-left: 1px;
    cursor: pointer;

    &:hover {
      &:before {
        background-color: $palette-dark;
        transition: 0.2s ease-in;
      }
    }

    &:before {
      position: absolute;
      content: "";
      background-color: $main-surface;
      border: 0.5px solid rgba(0, 0, 0, 0.04);
      border-radius: 100px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.08);
    }

    &-s-size {
      width: 34px;
      height: 16px;

      &:before {
        width: 14px;
        height: 14px;
      }
    }

    &-m-size {
      width: 48px;
      height: 24px;

      &:before {
        width: 20px;
        height: 20px;
      }
    }

    &-l-size {
      width: 64px;
      height: 32px;

      &:before {
        width: 28px;
        height: 28px;
      }
    }

    &-xl-size {
      width: 70px;
      height: 36px;

      &:before {
        width: 32px;
        height: 32px;
      }
    }
  }

  .northy-ui-toggle:checked {
    &:disabled ~ .northy-ui-toggle-switch,
    ~ .northy-ui-toggle-switch {
      &-s-size {
        &:before {
          transform: translateX(18px);
        }
      }

      &-m-size {
        &:before {
          transform: translateX(25px);
        }
      }

      &-l-size {
        &:before {
          transform: translateX(33px);
        }
      }

      &-xl-size {
        &:before {
          transform: translateX(35px);
        }
      }
    }

    ~ .northy-ui-toggle-switch {
      transition: 0.3s ease-out;
      background-color: $main-secondary;

      &:before {
        background-color: $main-surface;
      }
    }

    &:disabled {
      ~ .northy-ui-toggle-switch {
        &:before {
          background-color: $grayscale-slight-hard;
        }
      }
    }
  }

  .northy-ui-toggle-label {
    margin-left: 10px;
  }
}
</style>

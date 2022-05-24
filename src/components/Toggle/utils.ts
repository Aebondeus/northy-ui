import { toggleEnum } from "./toggleEnum";
import { reactive } from "vue";

export const toggleClassHandler = (
  size: toggleEnum,
  className?: string
) => {
  const mainToggleClass = "northy-ui-toggle";
  const mainToggleSwitchClass = "northy-ui-toggle-switch";

  const toggleSizeClass = `${mainToggleClass}-${size}-size`;
  const toggleSwitchSizeClass = `${mainToggleSwitchClass}-${size}-size`;

  const toggleClass = reactive({
    [mainToggleClass]: true,
    [toggleSizeClass]: true,
    [className || ""]: true,
  });
  const toggleSwitchClass = reactive({
    [mainToggleSwitchClass]: true,
    [toggleSwitchSizeClass]: true,
  });

  return { toggleClass, toggleSwitchClass };
};

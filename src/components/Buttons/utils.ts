import { ref, reactive } from "vue";
import { accentEnum, buttonSizeEnum, decorationEnum } from "./buttonEnum";

export const buttonClassHandler = (
  accent: accentEnum,
  size: buttonSizeEnum,
  decoration: decorationEnum,
  muted: boolean,
  className?: string
) => {
  const mainButtonClass = "northy-ui-btn";
  const accentClass = ref(
    `${mainButtonClass}-${accent}${(muted && "-muted") || ""}`
  );
  const decorationClass = ref(
    `${mainButtonClass}-${decoration}${(muted && "-muted") || ""}`
  );
  const sizeClass = ref(`${mainButtonClass}-${size}`);
  const buttonClass = reactive({
    [className || ""]: true,
    [mainButtonClass]: true,
    [accentClass.value]: true,
    [decorationClass.value]: true,
    [sizeClass.value]: true,
  });

  return buttonClass;
};

import "../styles/button.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  style?: Partial<CSSStyleDeclaration>;
}

export const Button = (props: ButtonProps): HTMLButtonElement => {
  const button = document.createElement("button");
  button.textContent = props.label;
  if (props.style) {
    Object.assign(button.style, props.style);
  }
  button.onclick = props.onClick;
  return button;
};

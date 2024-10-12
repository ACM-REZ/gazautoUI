import "./input.scss";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Input({
  placeholder = "",
  type = "text",
  value = "",
  onChange,
}: InputProps): HTMLElement {
  const input = document.createElement("input");

  input.placeholder = placeholder;
  input.type = type;
  input.value = value;

  input.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    if (onChange) {
      onChange(target.value);
    }
  });

  return input;
}

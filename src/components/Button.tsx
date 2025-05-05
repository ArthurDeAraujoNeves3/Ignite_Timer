import { ButtonContainer } from "./Button.style";

import { ButtonVariant } from "./Button.style";

interface ButtonProps {
    color?: ButtonVariant;
};

export function Button({ color = "primary" }: ButtonProps) {
    return <ButtonContainer variant={color}>Enviar</ButtonContainer>
};

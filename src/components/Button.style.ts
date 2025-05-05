import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainer {
    variant: ButtonVariant;
};

const buttonVariants = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    success: "green"
};

export const ButtonContainer = styled.div<ButtonContainer>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme["green-500"]};

    /* background-color: ${props => buttonVariants[props.variant]}; */
`;

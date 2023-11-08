import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear"
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme: ThemeButton
};

export const Button: FC<IButtonProps> = (props) => {
const { className, children, theme, ...otherProps } = props;

    return (
        <button className={classNames(styles.button, {}, [className, styles[theme]])} {...otherProps} >
            {children}
        </button>
    )
};
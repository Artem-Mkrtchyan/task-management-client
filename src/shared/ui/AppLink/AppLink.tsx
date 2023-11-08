import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export const enum AppLinkTheme {
    PRIMATY = "primary",
    SECONDATY = "secondary"
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
};

export const AppLink: FC<IAppLinkProps> = (props) => {
    const { className, children, to, theme = AppLinkTheme.PRIMATY } = props;
    return (
        <Link
            to={to}
            className={classNames(
                styles["app-link"],
                {},
                [className, styles[theme]]
            )}
        >
            {children}
        </Link>
    )
};
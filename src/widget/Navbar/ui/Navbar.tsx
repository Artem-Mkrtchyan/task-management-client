import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widget/ThemeSwitcher";

interface INavbarProps {
    className?: string;
};

export const Navbar: FC<INavbarProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles["navbar__link-wrapper"]}>
                <AppLink to={"/"} theme={AppLinkTheme.PRIMATY}>Main Page</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.PRIMATY}>About Page</AppLink>
            </div>
            <ThemeSwitcher />
        </div>
    )
};
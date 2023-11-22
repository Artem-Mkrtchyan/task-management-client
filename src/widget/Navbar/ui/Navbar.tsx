import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widget/ThemeSwitcher";
import { LanguageSwitcher } from "widget/LanguageSwitcher";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation(["main", "about"]);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles["navbar__link-wrapper"]}>
                <AppLink to={"/"} theme={AppLinkTheme.PRIMATY}>{t("mainPage", {ns: "main"})}</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.PRIMATY}>{t("aboutPage", {ns: "about"})}</AppLink>
            </div>
            <div className={styles["navbar__switch-wrapper"]}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
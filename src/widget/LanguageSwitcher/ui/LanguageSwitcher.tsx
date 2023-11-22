import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.scss";

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const currentLangSwitch = i18n.language === "ru" ? "en" : "ru";

    const toogleLang = () => {
        i18n.changeLanguage(currentLangSwitch);
    };

    return (
        <button className={classNames(styles["language-switche"], {}, [className])} onClick={toogleLang}>
            {currentLangSwitch.toUpperCase()}
        </button>
    );
};
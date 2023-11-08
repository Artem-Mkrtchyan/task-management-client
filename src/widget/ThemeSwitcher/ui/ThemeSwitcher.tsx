import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import ThemeDark from "shared/assets/icon/theme-dark.svg";
import ThemeLight from "shared/assets/icon/theme-light.svg"
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
    className?: string;
};

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme} theme={ThemeButton.CLEAR} className={classNames(styles["theme-switcher"], {}, [className])}>
            {theme === Theme.LIGHT ?<ThemeLight /> : <ThemeDark />}
        </Button>
    )
};
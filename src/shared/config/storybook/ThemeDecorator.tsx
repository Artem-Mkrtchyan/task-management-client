import { Decorator } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator: Decorator = (Story, context) => {
    const { theme } = context.parameters;
    const storyTheme = theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK;

    return (
        <div className={`app ${storyTheme}`}>
            <Story />
        </div>
    );
};
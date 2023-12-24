import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
    },
    args: {
        to: "/",
        children: "Ссылка"
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDATY
    }
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator],
    parameters: {
        theme: Theme.DARK
    }
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator],
    parameters: {
        theme: Theme.DARK
    }
};
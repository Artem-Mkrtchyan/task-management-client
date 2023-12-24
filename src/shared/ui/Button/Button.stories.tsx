import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Button",
    component: Button,
    argTypes: {
        theme: ThemeButton
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.CLEAR
    },
};

export const Primary: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.PRIMARY
    },
};

export const ClearThemeDark: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.CLEAR
    },
    decorators: [ThemeDecorator],
    parameters: {
        theme: Theme.DARK
    }
};

export const PrimaryThemDark: Story = {
    args: {
        children: "Button",
        theme: ThemeButton.PRIMARY
    },
    decorators: [ThemeDecorator],
    parameters: {
        theme: Theme.DARK
    }
};
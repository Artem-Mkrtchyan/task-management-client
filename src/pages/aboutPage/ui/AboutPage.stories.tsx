import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import AboutPage from "./AboutPage";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator],
    parameters: {
        theme: Theme.DARK
    }
};
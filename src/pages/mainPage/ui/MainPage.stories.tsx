import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import MainPage from "./MainPage";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

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
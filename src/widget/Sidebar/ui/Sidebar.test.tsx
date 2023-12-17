import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Button", () => {
    test("test render", () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Toggle sidebar", () => {
        render(<Sidebar />);
        const sidebarButton = screen.getByTestId("sidebar-button");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(sidebarButton);
        screen.debug();
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar--collabse");
    });
});
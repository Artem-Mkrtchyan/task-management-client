import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
    test("with only first params", () => {
        expect(classNames("cls")).toBe("cls");
    });

    test("with mods params", () => {
        expect(classNames("cls", { open: true, close: false, focus: true })).toBe("cls open focus");
    });

    test("with mods additional", () => {
        expect(classNames("cls", {}, ["open", "focus"])).toBe("cls open focus");
    });

    test("all arguments", () => {
        expect(classNames("cls", {active: true, close: false}, ["open", "focus"])).toBe("cls active open focus");
    });
});
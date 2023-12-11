type TModes = Record<string, boolean | string>;

export function classNames(cls: string, mods?: TModes, additional?: string[]) {
    const result: Array<string | string[]> = [cls];

    if (mods) {
        result.push(...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls));
    }

    if (Array.isArray(additional)) {
        result.push(...additional.filter(Boolean));
    }

    return result.join(" ");
}

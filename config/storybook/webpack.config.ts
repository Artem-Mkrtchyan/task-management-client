import { Configuration } from "webpack";
import { IBuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCSSLoaders";

export default ({ config }: { config: Configuration }) => {
    const buildPath: IBuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src")
    };
    config.resolve?.extensions?.push("ts", "tsx");
    config.resolve?.modules?.push(buildPath.src);

    config?.module?.rules?.forEach(rule => {
        if (!rule || typeof rule !== "object") return;
        if (rule.test instanceof RegExp && rule.test.test(".svg")) {
            rule.exclude = /\.svg$/;
        }
    });

    config?.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    });    config.module?.rules?.push(buildCssLoader(true));

    return config;
};
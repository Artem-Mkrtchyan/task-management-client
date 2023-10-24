import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { IBuildOption } from "./types/config"

export function buildLoaders(options: IBuildOption): RuleSetRule[] {
    const { isDev } = options;

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => path.includes(".module."),
                        localIdentName: isDev
                        ? "[path][name]__[local]--[hash:base64:5]"
                        : "[hash:base64:8]",
                    }
                }
            },
            "sass-loader",
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}
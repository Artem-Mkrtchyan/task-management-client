import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlagins } from "./buildPlagins";
import { buildResolvers } from "./buildResolves";
import { IBuildOption } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(option: IBuildOption): Configuration {
    const {mode, paths, isDev} = option

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlagins(paths),
        module: {
            rules: buildLoaders(option),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(option) : undefined
    }
}
import HtmlWebpackPlugin from "html-webpack-plugin";
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance, HotModuleReplacementPlugin } from "webpack";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlagins(options: IBuildOptions): WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
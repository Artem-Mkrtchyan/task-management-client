import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { IBuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
// import a from "typescript-plugin-css-modules"

export function buildPlagins(path: IBuildPaths): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
    ]
}
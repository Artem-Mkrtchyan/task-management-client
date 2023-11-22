import { IBuildOptions } from "./types/config";
import { Configuration as ConfigurationDevServer } from "webpack-dev-server";

export function buildDevServer(option: IBuildOptions): ConfigurationDevServer {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
        hot: true
    };
}
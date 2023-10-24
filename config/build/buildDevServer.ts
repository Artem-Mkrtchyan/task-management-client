import { IBuildOption } from "./types/config";
import { Configuration as ConfigurationDevServer } from "webpack-dev-server";

export function buildDevServer(option: IBuildOption): ConfigurationDevServer {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true
    }
}
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Suspense } from "react";
import "./styles/index.scss";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
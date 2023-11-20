import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import "./styles/index.scss"
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';


export function App() {

    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
}
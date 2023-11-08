import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import "./styles/index.scss"
import { Navbar } from 'widget/Navbar';


export function App() {

    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <AppRouter />
        </div>
    );
}
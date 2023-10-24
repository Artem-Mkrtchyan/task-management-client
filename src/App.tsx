import { Link, Route, Routes } from 'react-router-dom';
import { Suspense} from 'react';
import { MainPageAsync } from './pages/mainPage/MainPage.async';
import { AboutPageAsync } from './pages/aboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';

export function App() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} >toogle theme</button>
            <Link to={"/"} >Main</Link>
            <Link to={"/about"} >About</Link>
            <Suspense fallback={<div>Loading...</div>} >
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}
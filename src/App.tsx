import {lazy} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "./components/Loader.tsx";
import NavBar from "./components/NavBar.tsx";

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Team = lazy(() => import('./pages/Team.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));


function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={'/'} element={<Loader element={<Home/>}/>}/>
                    <Route path={'/about'} element={<Loader element={<About/>}/>}/>
                    <Route path={'/team'} element={<Loader element={<Team/>}/>}/>
                    <Route path={'/services'} element={<Loader element={<Services/>}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

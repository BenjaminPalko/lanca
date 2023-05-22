import {lazy, type PropsWithChildren} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {cacheExchange, Client, fetchExchange, Provider as URQLProvider} from "urql";
import Loader from "./components/Loader.tsx";
import NavBar from "./components/NavBar.tsx";

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Team = lazy(() => import('./pages/Team.tsx'));

const client = new Client({
    url: import.meta.env.VITE_CMS_URL,
    exchanges: [cacheExchange, fetchExchange],
})

const Providers = function ({children}: PropsWithChildren) {
    return (
        <URQLProvider value={client}>
            {children}
        </URQLProvider>
    )
}

function App() {

    return (
        <Providers>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={'/'} element={<Loader element={<Home/>}/>}/>
                    <Route path={'/about'} element={<Loader element={<About/>}/>}/>
                    <Route path={'/services'} element={<Loader element={<Services/>}/>}/>
                    <Route path={'/team'} element={<Loader element={<Team/>}/>}/>
                </Routes>
            </BrowserRouter>
        </Providers>
    )
}

export default App

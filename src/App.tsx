import {Provider} from "jotai";
import {clientAtom} from "jotai-urql";
import {useHydrateAtoms} from "jotai/react/utils";
import {lazy, type PropsWithChildren} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {cacheExchange, Client, fetchExchange, Provider as URQLProvider} from "urql";
import Loader from "./components/Loader.tsx";
import NavBar from "./components/NavBar.tsx";
import Person from "./pages/Team/Person.tsx";

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Team = lazy(() => import('./pages/Team.tsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.tsx'));

const client = new Client({
    url: import.meta.env.VITE_CMS_URL,
    exchanges: [cacheExchange, fetchExchange],
})

const HydrateAtoms = ({children}: PropsWithChildren) => {
    useHydrateAtoms([[clientAtom, client]])
    return (
        <>
            {children}
        </>
    )
}

const Providers = function ({children}: PropsWithChildren) {
    return (
        <URQLProvider value={client}>
            <Provider>
                <HydrateAtoms>
                    {children}
                </HydrateAtoms>
            </Provider>
        </URQLProvider>
    )
}

function App() {

    return (
        <Providers>
            <BrowserRouter>
                <div className={'h-screen w-screen flex flex-col'}>
                    <NavBar/>
                    <div className={'flex-1'}>
                        <Routes>
                            <Route path={'/'} element={<Loader element={<Home/>}/>}/>
                            <Route path={'/about'} element={<Loader element={<About/>}/>}/>
                            <Route path={'/services'} element={<Loader element={<Services/>}/>}/>
                            <Route path={'/team'} element={<Loader element={<Team/>}/>}/>
                            <Route path={'/team/:id'} element={<Loader element={<Person/>}/>}/>
                            <Route path={'*'} element={<Loader element={<PageNotFound/>}/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Providers>
    )
}

export default App

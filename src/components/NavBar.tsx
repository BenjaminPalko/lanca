import {useNavigate} from "react-router-dom";
import brand from '../assets/brand.svg';

const NavBar = function () {

    const navigate = useNavigate();

    return (
        <header aria-label="Site Header" className="bg-white shadow">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-4">
                        <a className="block hover:cursor-pointer" onClick={() => navigate('/')}>
                            <span className="sr-only">Home</span>
                            <img src={brand} alt={'Lancer'} width={'36px'} height={'36px'}/>

                        </a>
                        <h1 className={'text-3xl font-extralight antialiased'}>Lancer</h1>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Site Nav" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="block h-16 leading-[4rem] text-gray-500 transition border-b-4 border-transparent hover:border-current hover:text-red-600 hover:cursor-pointer"
                                        onClick={() => navigate('/about')}
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="block h-16 leading-[4rem] text-gray-500 transition border-b-4 border-transparent hover:border-current hover:text-red-600 hover:cursor-pointer"
                                        onClick={() => navigate('/services')}
                                    >
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="block h-16 leading-[4rem] text-gray-500 transition border-b-4 border-transparent hover:border-current hover:text-red-600 hover:cursor-pointer"
                                        onClick={() => navigate('/team')}
                                    >
                                        Team
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar;

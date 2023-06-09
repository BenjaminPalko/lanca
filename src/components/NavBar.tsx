import {useLocation, useNavigate} from "react-router-dom";
import brand from '../assets/brand.svg';

const NavBar = function () {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header aria-label="Site Header" className="bg-white shadow">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-4">
                        <a className="block md:flex items-center gap-2 hover:text-red-500 hover:cursor-pointer"
                           onClick={() => navigate('/')}>
                            <span className="sr-only">Home</span>
                            <img src={brand} alt={'Lanca'} width={'32px'} height={'32px'}/>
                            <h1 className={'text-2xl font-extralight antialiased -mb-1 uppercase'}>Lanca</h1>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Site Nav" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className={`block h-16 leading-[4rem] text-gray-500 transition border-b-4 ${location.pathname === '/about' || 'border-transparent'} hover:border-current hover:text-red-600 hover:cursor-pointer`}
                                        onClick={() => navigate('/about')}
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className={`block h-16 leading-[4rem] text-gray-500 transition border-b-4 ${location.pathname === '/services' || 'border-transparent'} hover:border-current hover:text-red-600 hover:cursor-pointer`}
                                        onClick={() => navigate('/services')}
                                    >
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className={`block h-16 leading-[4rem] text-gray-500 transition border-b-4 ${location.pathname === '/team' || 'border-transparent'} hover:border-current hover:text-red-600 hover:cursor-pointer`}
                                        onClick={() => navigate('/team')}
                                    >
                                        Team
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className={`block h-16 leading-[4rem] text-gray-500 transition border-b-4 ${location.pathname === '/contact' || 'border-transparent'} hover:border-current hover:text-red-600 hover:cursor-pointer`}
                                        onClick={() => navigate('/contact')}
                                    >
                                        Contact
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

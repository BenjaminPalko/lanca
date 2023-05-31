import {useAtom} from "jotai";
import {useNavigate} from "react-router-dom";
import ServicesAtom from "../atoms/ServicesAtom.ts";
import ServiceCard from "../components/ServiceCard.tsx";

const Services = function () {

    const [services,] = useAtom(ServicesAtom);
    const navigate = useNavigate();

    return (
        <div className={'h-full mx-auto max-w-screen-xl mt-8'}>
            <section className="bg-white rounded">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                            aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                            saepe laborum.
                        </p>
                    </div>

                    <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            services.data?.services.map(service => (
                                <li key={service.id}>
                                    <ServiceCard service={service}/>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="mt-12 text-center">
                        <a
                            onClick={() => navigate('/contact')}
                            className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:cursor-pointer hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services;

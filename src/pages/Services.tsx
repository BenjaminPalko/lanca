import {useAtom} from "jotai";
import ServicesAtom from "../atoms/ServicesAtom.ts";
import ServiceCard from "../components/ServiceCard.tsx";

const Services = function () {

    const [services,] = useAtom(ServicesAtom);

    return (
        <div className={'h-full w-1/2 mt-8 mx-auto'}>
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
                            href="#"
                            className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400"
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

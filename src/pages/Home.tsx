import {useNavigate} from "react-router-dom";

const Home = function () {

    const navigate = useNavigate();

    return (
        <>
            <section className="bg-gray-50 h-full">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Professional Web Development?
                            <strong className="font-extrabold text-red-700 sm:block">
                                We got that.
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 hover:cursor-pointer focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                onClick={() => navigate('/services')}
                            >
                                Services
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-500 hover:cursor-pointer focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                onClick={() => navigate('/about')}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;

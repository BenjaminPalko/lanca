const Contact = function () {

    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-8 py-0 shadow-lg grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12 flex flex-col justify-center gap-10">
                    <p className="max-w-xl text-lg">
                        At the same time, the fact that we are wholly owned and totally
                        independent from manufacturer and other group control gives you
                        confidence that we will only recommend what is right for you.
                    </p>

                    <div className="mt-8">
                        <a href="tel:0-151-475-4450" className="text-2xl font-bold text-pink-600">
                            0151 475 4450
                        </a>

                        <address className="mt-2 not-italic">
                            282 Kevin Brook, Imogeneborough, CA 58517
                        </address>
                    </div>
                </div>

                <div className=" lg:col-span-3 lg:p-12">

                    <h1 className={'text-3xl uppercase text-red-600 py-4'}>Contact Us</h1>

                    <form action="" className="space-y-4">

                        <label
                            htmlFor="Name"
                            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                placeholder="Name"
                                type="text"
                                id="name"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span
                                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
                                Name
                            </span>
                        </label>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <label
                                htmlFor="UserEmail"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="email"
                                    id="UserEmail"
                                    placeholder="Email"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />

                                <span
                                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Email
                                </span>
                            </label>

                            <label
                                htmlFor="phone"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    placeholder="Phone Number"
                                    type="tel"
                                    id="phone"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />

                                <span
                                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Phone
                                </span>
                            </label>
                        </div>

                        <label
                            htmlFor="message"
                            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <textarea
                                className={'peer w-full border-none bg-transparent p-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'}
                                placeholder="Message"
                                rows={8}
                                id="message"
                            ></textarea>

                            <span
                                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
                                Message
                            </span>
                        </label>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Send Enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;

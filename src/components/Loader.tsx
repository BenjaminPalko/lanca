import {type ReactElement, Suspense} from "react";

const Loader = function ({element}: { element: ReactElement }) {

    const Fallback = function () {

        return (
            <div className={'h-full w-full flex justify-center items-center antialiased'}>
                <span className="relative flex h-24 w-24">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-24 w-24 bg-red-500"></span>
                </span>
            </div>
        )
    }

    return (
        <Suspense fallback={<Fallback/>}>
            {element}
        </Suspense>
    )
}

export default Loader;

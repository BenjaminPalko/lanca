import {type ReactElement, Suspense} from "react";

const Loader = function ({element}: { element: ReactElement }) {

    const Fallback = function () {

        return (
            <></>
        )
    }

    return (
        <Suspense fallback={<Fallback/>}>
            {element}
        </Suspense>
    )
}

export default Loader;

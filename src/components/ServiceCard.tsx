import {useNavigate} from "react-router-dom";
import {type Service} from "../atoms/ServicesAtom.ts";

interface ServiceCardProps {
    service: Service
}

const ServiceCard = function ({service}: ServiceCardProps) {

    const navigate = useNavigate();

    const handleClick = function () {
        navigate(`/services/${service.slug}`)
    }

    return (
        <a
            className="block rounded-xl border border-red-500/10 p-8 shadow-xl transition hover:border-gray-300 hover:shadow-red-500/10"
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-gray-800">{service.name}</h2>

            <p className="mt-1 text-sm text-gray-500">
                {service.details}
            </p>
        </a>
    )
}

export default ServiceCard;

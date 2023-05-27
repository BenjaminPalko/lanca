import {useNavigate} from "react-router-dom";
import {type Person} from "../atoms/PeopleAtom.ts";
import Badge from "./Badge.tsx";

interface PersonCardProps {
    person: Person;
}

const PersonCard = function ({person}: PersonCardProps) {

    const navigate = useNavigate();

    const handleClick = function () {
        navigate(`/team/${person.slug}`)
    }

    return (
        <a onClick={handleClick}
           className="group relative block bg-black overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:cursor-pointer">
            <img
                alt="Developer"
                src={person.photo.url}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-red-600">
                    Developer
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl capitalize">{person.name}</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            {
                                person.about.slice(0, 120).trim() + '...'
                            }
                        </p>
                        <ul className={'mt-2 flex flex-wrap gap-2'}>
                            {
                                person.skills.map(skill => (
                                    <li key={skill.skill.id}>
                                        <Badge value={skill.skill.name} color={'red'}/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default PersonCard;

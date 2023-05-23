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
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:cursor-pointer max-w-sm"
                 onClick={handleClick}>
            <img
                alt="Office"
                src={person.photo.url}
                className="h-80 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">

                <a>
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        {person.name}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
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
        </article>
    )
}

export default PersonCard;

import {type Person} from "../atoms/PeopleAtom.ts";
import Badge from "./Badge.tsx";

interface PersonCardProps {
    person: Person;
}

const PersonCard = function ({person}: PersonCardProps) {

    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:cursor-pointer max-w-sm">
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

                <div className={'mt-2 flex flex-wrap gap-2'}>
                    {person.skills.map(skill => (
                        <Badge value={skill.skillName} color={'red'}/>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default PersonCard;

import {useAtom} from "jotai";
import PeopleAtom from "../atoms/PeopleAtom.ts";
import PersonCard from "../components/PersonCard.tsx";

const Team = function () {

    const [people,] = useAtom(PeopleAtom);

    return (
        <div className={'w-1/2 mx-auto mt-8 p-8 flex flex-col gap-10 bg-white rounded'}>
            <h1 className={'w-full text-center text-4xl'}>Meet the Team</h1>
            <ul>
                {
                    people.data?.people.map(person => (
                        <li key={person.id}>
                            <PersonCard person={person}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Team;

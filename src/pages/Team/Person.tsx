import {useEffect, useMemo} from "react";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "urql";
import {type Person} from "../../atoms/PeopleAtom.ts";
import PageNotFound from "../PageNotFound.tsx";

const Person = function () {

    const {id} = useParams();

    const [result,] = useQuery({
        query: gql<{ person: Person }>`
            query PersonById($id: ID) {
                person(where: {id: $id}) {
                    id
                    name
                    about
                    skills {
                        ... on PersonSkill {
                            rank
                            skill {
                                id
                                name
                            }
                        }
                    }
                    photo {
                        id
                        url
                    }
                }
            }
        `,
        variables: {
            id: id
        }
    });

    const person = useMemo(() => result?.data?.person, [result]);

    useEffect(() => {
        console.log(person);
    }, [person])

    if (!person) {
        return <PageNotFound/>;
    }

    return (
        <>
            <h1>{person.name}</h1>
        </>
    )
}

export default Person;

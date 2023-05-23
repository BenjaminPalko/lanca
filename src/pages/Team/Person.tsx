import {useEffect, useMemo} from "react";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "urql";
import {type Person} from "../../atoms/PeopleAtom.ts";
import PageNotFound from "../PageNotFound.tsx";

const Person = function () {

    const {slug} = useParams();

    const [result,] = useQuery({
        query: gql<{ person: Person }>`
            query PersonById($slug: String) {
                person(where: {slug: $slug}) {
                    id
                    slug
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
            slug: slug
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
        <div className={'h-full w-1/2 mt-8 mx-auto bg-white rounded'}>
            <h1>{person.name}</h1>
        </div>
    )
}

export default Person;

import {atomWithQuery} from "jotai-urql";
import {gql} from "urql";

export interface Person {
    id: string;
    name: string;
    about: string;
    skills: { id: string, skillName: string, rank: string }[];
    photo: {
        id: string;
        url: string;
    }
}

const PeopleAtom = atomWithQuery({
    query: gql<{ people: Person[] }>`
        query People {
            people {
                id
                name
                about
                skills {
                    ... on Skill {
                        id
                        rank
                        skillName
                    }
                }
                photo {
                    id
                    url
                }
            }
        }
    `
})

export default PeopleAtom;

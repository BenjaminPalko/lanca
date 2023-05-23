import {atomWithQuery} from "jotai-urql";
import {gql} from "urql";

type Rank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Person {
    id: string;
    name: string;
    about: string;
    skills: { rank: Rank, skill: { id: string, name: string } }[];
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
    `
})

export default PeopleAtom;

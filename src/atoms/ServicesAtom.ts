import {atomWithQuery} from "jotai-urql";
import {gql} from "urql";

export interface Service {
    id: string;
    slug: string;
    name: string;
    details: string;
    description: string;
    icon: {
        id: string;
        url: string
    };
    skills: {
        id: string;
        name: string;
    }[];
}

const ServicesAtom = atomWithQuery({
    query: gql<{ services: Service[] }>`
        query Services {
            services {
                id
                slug
                name
                details
                description
                icon {
                    id
                    url
                }
                skills {
                    ... on Skill {
                        id
                        name
                    }
                }
            }
        }
    `
})

export default ServicesAtom;

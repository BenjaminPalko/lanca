import {useMemo} from "react";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "urql";
import {type Service} from "../../atoms/ServicesAtom.ts";
import PageNotFound from "../PageNotFound.tsx";

const Service = function () {

    const {slug} = useParams();

    const [result,] = useQuery({
        query: gql<{ service: Service }>`
            query ServiceBySlug($slug: String) {
                service(where: {slug: $slug}) {
                    id
                    slug
                    name
                    details
                    description
                    skills {
                        ... on Skill {
                            id
                            name
                        }
                    }
                    icon {
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

    const service = useMemo(() => result?.data?.service, [result]);

    if (!service) {
        return <PageNotFound/>;
    }

    return (
        <div className={'h-full w-1/2 mt-8 mx-auto bg-white rounded'}>
            <h1>{service.name}</h1>
        </div>
    )
}

export default Service;

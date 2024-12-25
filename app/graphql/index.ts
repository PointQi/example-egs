import { graphqlHandler } from './handler';
import type { Router } from 'egg';

export const registerGraphqlRoute = (route: Router) => {
    route.all('/graphql', graphqlHandler);
};

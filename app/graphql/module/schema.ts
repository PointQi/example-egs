import { createSchema } from 'graphql-yoga'
import { testTypeDefs } from './test/schema';
import { testResolver } from './test/resolver';

export const schema = createSchema({
    typeDefs: [testTypeDefs],
    resolvers: [testResolver],
});

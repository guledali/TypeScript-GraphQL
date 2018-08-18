import { GraphQLServer } from 'graphql-yoga'



const resolvers = {
  Query: {
    hello: (_, { name }) =>{
      const returnValue = name ? `Nice to meet you ${name}` : "hello nobody"
      return returnValue
    } 
  }
}

const server = new GraphQLServer({
  typeDefs : './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
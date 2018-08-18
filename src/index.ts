import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'

interface Context {
  db: Prisma
  request: any
}


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
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'https://heroku-typescript-server.herokuapp.com/database/dev',
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
const Koa = require('koa')
const koaHelmet = require('koa-helmet')
const koaBodyParser = require('koa-bodyparser')
const koaCORS = require('koa-cors')
const { ApolloServer, gql } = require('apollo-server-koa')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()
app
  .use(koaHelmet())
  .use(koaBodyParser())
  .use(koaCORS())

server.applyMiddleware({ app })

app.listen({ port: 80 }, () =>
  console.log(`🚀 Server ready at http://localhost:80${server.graphqlPath}`)
)

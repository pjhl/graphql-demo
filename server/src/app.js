const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const koaHelmet = require('koa-helmet')
const koaBodyParser = require('koa-bodyparser')
const koaCORS = require('koa-cors')
const { ApolloServer } = require('apollo-server-koa')
const resolvers = require('./resolvers')

// Construct a schema, using GraphQL schema language
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.gql'), {
  encoding: 'utf-8'
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: {id: '1'} // Mock current user
  })
})

const app = new Koa()
app
  .use(koaHelmet())
  .use(koaBodyParser())
  .use(koaCORS())

server.applyMiddleware({ app })

app.listen({ port: 80 }, () =>
  console.log(`🚀 Server ready at http://localhost:80${server.graphqlPath}`)
)

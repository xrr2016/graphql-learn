const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf8')
const resolvers = require('./resolvers')

const myGraphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app.use('/graphql', 
  bodyParser.json(),
  graphqlExpress({ schema: myGraphqlSchema })
)

app.use('/graphiql', graphiqlExpress({ endpointUrl: '/graphql'}))

app.listen(3000, () => {
  console.log('App is listening on prot 3000')
})



const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const { graphqlExpress, graqhiqhExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.qgl'), 'utf-8')
const resolvers = require('./resolvers')

const myGraphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: myGraphqlSchema
}))

app.use('/graphiql', graphiqlExpress({ endpointUrl: '/grapgql'}))

app.listen(3000, () => {
  console.log('App is listening on prot 3000')
})







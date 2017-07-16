const people = []

const resolvers = {
  Query: {
    person (_, { id }) {
      return people[id]
    },
    people () {
      return people
    }
  },
  Mutation: {
    peoson (_, { input }) {
      if (input.id in people) {
        people[input.id] = input
        return people[input.id]
      }
      input.id = people.length
      people.push(input)
      return input
    }
  },
  Person: {
    bestFriend (person) {
      return people[person.bestFriend]
    }
  }
}

module.exports = resolvers









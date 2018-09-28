const users = require('./data/users')
const posts = require('./data/posts')

const mockCurrentUserId = '1'

const resolvers = {
  Query: {
    my: () => users.getById(mockCurrentUserId)
  },
  User: {
    async posts (user) {
      const allPosts = await posts.all()
      return allPosts.filter(el => el.authorId === user.id)
    }
  }
}

module.exports = resolvers

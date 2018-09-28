const users = require('./data/users')
const posts = require('./data/posts')
const likes = require('./data/likes')

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
  },
  Post: {
    async author (post) {
      return users.getById(post.authorId)
    },
    async likes (post) {
      const records = await likes.getByPostId(post.id)
      return {
        total: records.length,
        currentUserLiked: Boolean(records.find(el =>
          el.userId === mockCurrentUserId
        )),
        records: records
      }
    }
  },
  Like: {
    async post (like) {
      return posts.getById(like.postId)
    },
    async user (like) {
      return users.getById(like.userId)
    }
  }
}

module.exports = resolvers

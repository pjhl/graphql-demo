const users = require('./data/users')
const posts = require('./data/posts')
const likes = require('./data/likes')

const resolvers = {
  Query: {
    user: (obj, args) => users.getById(args.id),
    me: (obj, args, context) => users.getById(context.user.id)
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
    async likes (post, args, context) {
      const records = await likes.getByPostId(post.id)
      return {
        total: records.length,
        currentUserLiked: Boolean(records.find(el =>
          el.userId === context.user.id
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

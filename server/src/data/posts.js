const documents = [{
  id: '1',
  authorId: '1',
  body: 'There is some good in this world, and it’s worth fighting for.',
  date: '2018-09-24T12:45:56.583Z'
}, {
  id: '2',
  authorId: '1',
  body: 'The goal isn’t to live forever, the goal is to create something that will.',
  date: '2018-09-28T09:17:44.583Z'
}, {
  id: '3',
  authorId: '2',
  body: 'All endings are also beginnings. We just don’t know it at the time.',
  date: '2018-09-28T18:52:12.583Z'
}, {
  id: '4',
  authorId: '1',
  body: `The worst enemy to creativity is self-doubt. The worst enemy to
    creativity is self-doubt. The worst enemy to creativity is self-doubt.
    The worst enemy to creativity is self-doubt. The worst enemy to creativity
    is self-doubt. The worst enemy to creativity is self-doubt.`,
  date: '2018-09-28T18:52:56.583Z'
}]

module.exports = {
  all: async () => documents,
  getById: async (id) => {
    return documents.find(el => {
      return el.id === id
    })
  },
  add: async (document) => {
    documents.push(document)
    return document
  }
}

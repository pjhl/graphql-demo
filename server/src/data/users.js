const documents = [{
  id: '1',
  name: 'Moshe Laxe',
  username: 'mkellert0',
  avatar: {
    small: '/images/avatars/64x64.png/5fa2dd/ffffff',
    medium: '/images/avatars/128x128.jpg/5fa2dd/ffffff'
  }
},
{
  id: '2',
  name: 'Harley Storks',
  'username': 'hpontin1',
  'avatar': {
    'small': '/images/avatars/64x64.jpg/cc0000/ffffff',
    'medium': '/images/avatars/128x128.png/dddddd/000000'
  }
},
{
  'id': '3',
  'name': 'Annadiana Lambregts',
  'username': 'asiemens2 Fullick',
  'avatar': {
    'small': '/images/avatars/64x64.png/dddddd/000000',
    'medium': '/images/avatars/128x128.bmp/cc0000/ffffff'
  }
},
{
  'id': '4',
  'name': 'Augustine Gorham',
  'username': 'aboller3',
  'avatar': {
    'small': '/images/avatars/64x64.bmp/5fa2dd/ffffff',
    'medium': '/images/avatars/128x128.bmp/ff4444/ffffff'
  }
},
{
  'id': '5',
  'name': 'Kerby Whipp',
  'username': 'klilburne4',
  'avatar': {
    'small': '/images/avatars/64x64.bmp/dddddd/000000',
    'medium': '/images/avatars/128x128.jpg/dddddd/000000'
  }
},
{
  'id': '6',
  'name': 'Moritz Besnard',
  'username': 'mmacdearmont5',
  'avatar': {
    'small': '/images/avatars/64x64.png/5fa2dd/ffffff',
    'medium': '/images/avatars/128x128.png/cc0000/ffffff'
  }
},
{
  'id': '7',
  'name': 'Rad De Bruyne',
  'username': 'rhanes6',
  'avatar': {
    'small': '/images/avatars/64x64.bmp/ff4444/ffffff',
    'medium': '/images/avatars/128x128.png/5fa2dd/ffffff'
  }
},
{
  'id': '8',
  'name': 'Edeline Lumsdon',
  'username': 'eshadfourth7',
  'avatar': {
    'small': '/images/avatars/64x64.jpg/dddddd/000000',
    'medium': '/images/avatars/128x128.png/cc0000/ffffff'
  }
},
{
  'id': '9',
  'name': 'Weider e-Cartmale',
  'username': 'wsinderson8',
  'avatar': {
    'small': '/images/avatars/64x64.jpg/ff4444/ffffff',
    'medium': '/images/avatars/128x128.jpg/cc0000/ffffff'
  }
},
{
  'id': '10',
  'name': 'Dierdre Fullick',
  'username': 'doldis9',
  'avatar': {
    'small': '/images/avatars/64x64.jpg/dddddd/000000',
    'medium': '/images/avatars/128x128.png/dddddd/000000'
  }
}]

module.exports = {
  all: async () => documents,
  getById: async (id) => {
    return documents.find(el => {
      return el.id === id
    })
  }
}

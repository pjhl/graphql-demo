const documents = [{
  id: '1',
  name: 'Moshe Laxe',
  username: 'mkellert0',
  avatar: {
    small: 'https://api.adorable.io/avatars/64/1.png',
    medium: 'https://api.adorable.io/avatars/128/1.png'
  }
},
{
  id: '2',
  name: 'Harley Storks',
  'username': 'hpontin1',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/2.png',
    'medium': 'https://api.adorable.io/avatars/128/2.png'
  }
},
{
  'id': '3',
  'name': 'Annadiana Lambregts',
  'username': 'asiemens2',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/3.png',
    'medium': 'https://api.adorable.io/avatars/128/3.png'
  }
},
{
  'id': '4',
  'name': 'Augustine Gorham',
  'username': 'aboller3',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/4.png',
    'medium': 'https://api.adorable.io/avatars/128/4.png'
  }
},
{
  'id': '5',
  'name': 'Kerby Whipp',
  'username': 'klilburne4',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/5.png',
    'medium': 'https://api.adorable.io/avatars/128/5.png'
  }
},
{
  'id': '6',
  'name': 'Moritz Besnard',
  'username': 'mmacdearmont5',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/6.png',
    'medium': 'https://api.adorable.io/avatars/128/6.png'
  }
},
{
  'id': '7',
  'name': 'Rad De Bruyne',
  'username': 'rhanes6',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/7.png',
    'medium': 'https://api.adorable.io/avatars/128/7.png'
  }
},
{
  'id': '8',
  'name': 'Edeline Lumsdon',
  'username': 'eshadfourth7',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/8.png',
    'medium': 'https://api.adorable.io/avatars/128/8.png'
  }
},
{
  'id': '9',
  'name': 'Weider e-Cartmale',
  'username': 'wsinderson8',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/9.png',
    'medium': 'https://api.adorable.io/avatars/128/9.png'
  }
},
{
  'id': '10',
  'name': 'Dierdre Fullick',
  'username': 'doldis9',
  'avatar': {
    'small': 'https://api.adorable.io/avatars/64/10.png',
    'medium': 'https://api.adorable.io/avatars/128/10.png'
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

const documents = [{
  id: '1',
  name: 'Moshe Laxe',
  username: 'mkellert0',
  avatar: null
},
{
  id: '2',
  name: 'Harley Storks',
  'username': 'hpontin1',
  'avatar': null
},
{
  'id': '3',
  'name': 'Annadiana Lambregts',
  'username': 'asiemens2 Fullick',
  'avatar': null
},
{
  'id': '4',
  'name': 'Augustine Gorham',
  'username': 'aboller3',
  'avatar': null
},
{
  'id': '5',
  'name': 'Kerby Whipp',
  'username': 'klilburne4',
  'avatar': null
},
{
  'id': '6',
  'name': 'Moritz Besnard',
  'username': 'mmacdearmont5',
  'avatar': null
},
{
  'id': '7',
  'name': 'Rad De Bruyne',
  'username': 'rhanes6',
  'avatar': null
},
{
  'id': '8',
  'name': 'Edeline Lumsdon',
  'username': 'eshadfourth7',
  'avatar': null
},
{
  'id': '9',
  'name': 'Weider e-Cartmale',
  'username': 'wsinderson8',
  'avatar': null
},
{
  'id': '10',
  'name': 'Dierdre Fullick',
  'username': 'doldis9',
  'avatar': null
}]

module.exports = {
  all: async () => documents,
  getById: async (id) => {
    return documents.find(el => {
      return el.id === id
    })
  }
}

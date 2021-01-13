
const normalizedBooks = [
  {
    id: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
    name: '1Book1',
    price:24,
    authors: [
      'd75f762a-eadd-49be-8918-ed0daa8dd024',
      'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
    ],
    users: [
      'a304959a-76c0-4b34-954a-b38dbf310360',
      '20bed9b5-9c7b-4771-8221-75b74ed1904a',
    ],
    publishers:['dfb982e9-b432-4b7d-aec6-7f6ff2e6ag67']
  },
  {
    id: 'bb8afbec-2fec-491f-93e9-7f13950dd80b',
    name: '2Book2',
    price:45,
    authors: [
      'bd129641-c0eb-432b-84b6-8b81d2930358',
    ],
    users: [
      'a304959a-76c0-4b34-954a-b38dbf310360',
      '20bed9b5-9c7b-4771-8221-75b74ed1904a',
      'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
    ],
    publishers:['dfb982e9-b432-4b7d-aec6-7f6ff2e6ag67'],
  },
  {
    id: '982bfbce-c5e0-41a0-9f99-d5c20ecee49d',
    name: '3Book3',
    price:95,
    authors: [
      'd75f762a-eadd-49be-8918-ed0daa8dd024'
    ],
    users: ['a304959a-76c0-4b34-954a-b38dbf310360'],
    publishers:['dfb982e9-b432-4b7d-aec6-7f6ff2e6ah98'],
  },
  {
    id: 'd9241927-09e1-44f3-8986-a76346869037',
    name: '4Book4',
    price:39,
    authors: [
      'bd129641-c0eb-432b-84b6-8b81d2930358'
    ],
    users: [
      'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
      '20bed9b5-9c7b-4771-8221-75b74ed1904a',
    ],
    publishers:[
        'dfb982e9-b432-4b7d-aec6-7f6ff2e6ah98'
    ]
  },
];
const normalizedUsers = [
  {
    id: 'a304959a-76c0-4b34-954a-b38dbf310360',
    name: 'user1',
    isAdmin:false,
    email:'user1@lib.com',
    password:'user',
    books:['a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
      'bb8afbec-2fec-491f-93e9-7f13950dd80b',
      '982bfbce-c5e0-41a0-9f99-d5c20ecee49d'
    ]
  },
  {
    id: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
    name: 'user2',
    isAdmin:false,
    email:'user2@lib.com',
    password:'user',
    books:[
        'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
        'bb8afbec-2fec-491f-93e9-7f13950dd80b',
        'd9241927-09e1-44f3-8986-a76346869037',
    ]
  },
  {
    id: 'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
    name: 'user3',
    isAdmin:false,
    email:'user3@lib.com',
    password:'user',
    books:['bb8afbec-2fec-491f-93e9-7f13950dd80b',
          'd9241927-09e1-44f3-8986-a76346869037',
    ]
  },
  {
    id: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'user4',
    isAdmin:false,
    email:'user4@lib.com',
    password:'user',
    books:[],
  },
  {
    id: '1547335a-ea18-4547-a73d-32bd6e9f651c',
    name: 'user5',
    isAdmin:false,
    email:'user5@lib.com',
    password:'user',
    books:[]
  },
  {
    id: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    name: 'admin',
    isAdmin:true,
    email:'admin@lib.com',
    password:'admin'
  },


];
const normalizedPublishers = [
  {
    name:'publisher1',
    id:'dfb982e9-b432-4b7d-aec6-7f6ff2e6ag67',
    books:[
      'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2',
      'bb8afbec-2fec-491f-93e9-7f13950dd80b'
    ]
  },
  {
    name:'publisher2',
    id:'dfb982e9-b432-4b7d-aec6-7f6ff2e6ah98',
    books:[
      '982bfbce-c5e0-41a0-9f99-d5c20ecee49d',
      'd9241927-09e1-44f3-8986-a76346869037'
    ]
  },
]
const normalizedAuthors = [
  {
    id: 'd75f762a-eadd-49be-8918-ed0daa8dd024',
    name: 'author1',
    books: ['a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2','982bfbce-c5e0-41a0-9f99-d5c20ecee49d' ],
  },

  {
    id: 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049',
    name: 'author2',
    books: ['a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'],
  },
  {
    id: 'bd129641-c0eb-432b-84b6-8b81d2930358',
    name: 'author3',
    books: ['bb8afbec-2fec-491f-93e9-7f13950dd80b', 'd9241927-09e1-44f3-8986-a76346869037'],
  },
]
export {
  normalizedUsers,
  normalizedBooks,
  normalizedPublishers,
  normalizedAuthors,
};

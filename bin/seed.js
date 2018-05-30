const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://maximo:maximo@ds133360.mlab.com:33360/bandstarter');

const users = [
  {
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'Maximo Campo',
    email: 'maximo@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Cuahutemoc',
    age:'18',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['The Beatles', 'Arctic Monkeys', 'Radiohead'],
    instruments:['Drums','Guitar'],
    genres:['Rock','Alternative','Jazz'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'B.B. King',
    email: 'king@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Emiliano Zapata',
    age:'70',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['Weezer', 'Metronomy', 'Radiohead'],
    instruments:['Guitar'],
    genres:['Rock','Blues','Jazz'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'Bill Evans',
    email: 'evans@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'40',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['Weezer', 'Metronomy', 'Radiohead'],
    instruments:['Guitar'],
    genres:['Jazz'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'Thelonius Monk',
    email: 'monk@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'30',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['Miles Davis', 'Charlie Parker', 'Tame Impala'],
    instruments:['Keys'],
    genres:['Jazz'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'Miles Davis',
    email: 'davis@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'50',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['Led Zeppelin', 'Arctic Monkeys', 'Radiohead'],
    instruments:['Trumpet'],
    genres:['Jazz'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'John Coltrane',
    email: 'coltrane@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'21',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['Weezer', 'The Beatles', 'Miles Davis'],
    instruments:['Saxophone'],
    genres:['Jazz'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'Elvis Presley',
    email: 'presley@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'24',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['The Beatles', 'Chuck Berry', 'Radiohead'],
    instruments:['Guitar','Voice'],
    genres:['Rock','Blues'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'John Lennon',
    email: 'lennon@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'40',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['The Beatles', 'Metronomy', 'Radiohead'],
    instruments:['Guitar','Voice'],
    genres:['Rock','Pop'],
    requests:[],
    snippets:[],
    replies:[]
  },{
    hash: "ab93e373891f2e0dc4a05dd1337efc70f85598ba56183c0551672618bf62fb4d54904d123eed5c7f7591ad95873f35310ab94d5ee104c10e4e42ab317c259f362391509a1dd9a8b1ec4b151fef4802c6582159d13a8a6c93c1de0eb8d0c2732d342f955d2b0ae2cc751a07d729c9dcd48b3071008f768544f8fad80e2e82677fa4fc2d977d6ec75afc8ccd0f970147922b85188ed61d3ae4c8060eb36830487d6452365b20f35a0473556f7c0081f6f9110bd9c48e15d930702f62545d8c62c90a91150780bc150f794ee0f781edf4b8cecb19a5517327b87e9665e31f4e54671f6ab6c947cf73eb6d81c2862f07b4c92542c439ca3512a366b1e2080fcffd1e8cca7d6b497a2e8a1217d468912a58aaf4dd3682437a6af56adc29f0c6153739333ad4edfe750e020727e518484da5984cb71958f5a4e2a75fdae655a46468b8946e4a1f8d510630bd32813483cbc190c61f84e7042b70ac50adce335cb78801df13a1d11514eaae0d58b57b39c1f03646994bc5e37c3ffd7f1c9fc5df0fdda36e472a95826ad80e91a461ae0a2d7e311348858b66e3abeb19eeb5936640b50e3d9f6f99b5301471f412abcdbb6e2b6f4d8b6bb4a20ac95408a1ecadbfa3d4bd14859c00665a647ad8781c730e2136a5e5a3845480dfc258fd9a83cdea9cd968276fba401519538d4d83b5c5d27dbbb4942b9b15ff88e97c91676041b15fe52c",
    salt: "3157a2b066a057cca598d24262cfe6e224939abe3750e29ff47ba11cc18a49a6",
    name:'Paul McCartney',
    email: 'mccartney@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    location:'Ciudad de Mexico, Benito Juarez',
    age:'35',
    gender:'male',
    profilePic:'https://firebasestorage.googleapis.com/v0/b/bandstarter-e4143.appspot.com/o/profilePic%2Ffriends_ross_240x260_052820041524.jpg?alt=media&token=ec3a7e35-72fe-4219-a673-8d0255604526',
    influences:['Weezer', 'Metronomy', 'Radiohead'],
    instruments:['Guitar','Bass','Voice'],
    genres:['Rock','Pop'],
    requests:[],
    snippets:[],
    replies:[]
  }
];

User.create(users, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${users.length} users`)
});

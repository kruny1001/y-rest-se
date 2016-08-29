var firebase = require('firebase');

firebase.initializeApp({
	//serviceAccount: "path/to/serviceAccountCredentials.json",
	databaseURL: "https://y-rest-se.firebaseio.com"
});

var data = [
	//a
	{
		name:'돼지양념갈비',
		name_cn:'调味猪排烧烤',
		name_jp:'テジ・ヤンニョム・カルビ/味付け豚カルビ',
		name_en:'Marinated Pork Ribs',
		img: 'dImages/a1.png',
		options:[
			{desc:'2인분 2人 Two   people (640g)', price:'￦26,000'},
			{desc:'3인분 3人 Three people (960g)', price:'￦39,000'},
			{desc:'4인분 4人 Four  people (1280g)', price:'￦52,000'}
		],
		type:'meat'
	},
	//b
	{
		name:'돼지생갈비',
		name_cn:'调味猪排烧烤',
		name_jp:'味付け豚カルビ',
		name_en:'Pork Short Ribs',
		img: 'dImages/b1.png',
		options:[
			{desc:'2인분 2人 Two people (640g)', price:'￦30,000'},
			{desc:'3인분 3人 Three people (960g)', price:'￦45,000'},
			{desc:'4인분 4人 Four people  (1280g)', price:'￦60,000'},
		],
		type:'meat'
	},
	//c
	{
		name:'흑돼지오겹살',
		name_cn:'黑猪五花肉',
		name_jp:'フクテジ・オギョプサル',
		name_en:'Black Pork Belly',
		img: 'dImages/c1.png',
		options:[
			{desc:'2인분 2人 Two people (640g)', price:'￦34,000'},
			{desc:'3인분 3人 Three people (960g)', price:'￦51,000'},
			{desc:'4인분 4人 Four people  (1280g)', price:'￦68,000'},
		],
		type:'meat'
	},
	//d
	{
		name:'돼지모듬구이',
		name_cn:'烤猪肉拼盘/烤豬肉拼盤_济州产',
		name_jp:'テジ・モドゥム・クイ',
		name_en:'Grilled Pork Set',
		img: 'dImages/d1-1.png',
		options:[
			{desc:'2인분 2人 Two people', price:'￦37,500'},
			{desc:'3-4인분 3-4人 3-4 people', price:'￦68,500'}
		],
		type:'meat'
	},
	//식사류
	//e
	{
		name:'물냉면',
		name_cn:'冷面',
		name_jp:'フシッ・ネンミョン',
		name_en:'Cold Noodles',
		img: 'dImages/e1.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦6,000'},
		],
		type:'single'
	},
	{
		name:'비빔냉면',
		name_cn:'拌冷面',
		name_jp:'ピビムネンミョン',
		name_en:'Spicy buckwheat Noodles',
		img: 'dImages/e2.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦6,000'},
		],
		type:'single'
	},
	{
		name:'돌솥비빔밥',
		name_cn:'石锅拌饭',
		name_jp:'トルソッピビムパシ',
		name_en:'Bibimbap',
		img: 'dImages/f1.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦6,000'},
		],
		type:'single'
	},
	{
		name:'김치찌개',
		name_cn:'泡菜锅',
		name_jp:'キムチチゲ',
		name_en:'Kimchi Stew',
		img: 'dImages/f2.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦6,000'},
		],
		type:'single'
	},
	{
		name:'된장찌개',
		name_cn:'大酱汤',
		name_jp:'テンジャンチゲ',
		name_en:'Soybean Paste Stew',
		img: 'dImages/f3.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦7,000'},
		],
		type:'single'
	},
	{
		name:'우거지해장국',
		name_cn:'干白菜醒酒汤',
		name_jp:'ウゴジ・ヘジャンクク',
		name_en:'Dried Cabbage Soup',
		img: 'dImages/g1.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦7,000'},
		],
		type:'single'
	},
	{
		name:'갈비탕',
		name_cn:'排骨汤',
		name_jp:'カルビタン',
		name_en:'Short Rib Soup',
		img: 'dImages/g2.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦7,000'},
		],
		type:'single'
	},
	{
		name:'육개장',
		name_cn:'香辣牛肉汤 / 香辣牛肉湯',
		name_jp:'ユッケジャン / 牛肉の辛味スープ',
		name_en:'Spicy Beef Soup',
		img: 'dImages/g3.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦7,000'},
		],
		type:'single'
	},
	{
		name:'공기밥',
		name_cn:'米饭',
		name_jp:'コンギバプ / ご飯',
		name_en:'Steamed Rice',
		img: 'dImages/e3.png',
		options:[
			{desc:'1인분 1人 for one people', price:'￦1,000'},
		],
		type:'single'
	}
]

var db = firebase.database();
var ref = db.ref("menus");
ref.once("value", function(snapshot) {
	console.log(snapshot.val());
});
ref.set(data);
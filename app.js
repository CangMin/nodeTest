var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PROT || 3000;
var app = express();

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(port)

console.log('moves started on port'+port);

//路由
//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'电影首页',
		movies:[{
		title:'机械战警',
		_id:1,
		poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	},{
		title:'机械战警',
		_id:2,
		poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	},{
		title:'机械战警',
		_id:3,
		poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	},{
		title:'机械战警',
		_id:4,
		poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	},{
		title:'机械战警',
		_id:5,
		poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	},{
		title:'机械战警',
		_id:6,
		poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	}]
	});
});

//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'电影网详情页',
		movie:{
			doctor:'何塞-帕迪里亚',
			country:'美国',
			title:'机械战警',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			summary:'打发打发时噶饿raw各大书店萨尔瓦亲热啊我噶范德萨飞洒'
		}
	});
});

//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'电影网后台录入页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	});
});

//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'电影网列表页',
		movies:[{
			title:'机械战警',
			_id:1,
			doctor:'何塞-帕迪里亞',
			country:'美国',
			year:2014,
			language:'英语',
			flash:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
		}]

	});
});
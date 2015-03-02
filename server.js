
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs("mongodb://root:root@ds049641.mongolab.com:49641/dbname",["serviceClients"]);

var bodyParser = require('body-parser');

//app.get('/', function(req, res){
 // res.send('hello world');
//});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/serviceClients",function(req, res)
{
	db.serviceClients.find(function(err,docs)
	{
res.json(docs);
	});
	//res.json([]);
});

app.post("/serviceClients",function(req,res)
	{
var svc = req.body;
console.log(svc);
db.serviceClients.insert(req.body,function(err,doc)
	{
res.json(doc);
	});
});
app.delete("/serviceClients/:id",function(req,res){
	var id = req.params.id;
	console.log(id);
	db.serviceClients.remove({_id : mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});
app.get("/serviceClients/:id",function(req,res){
var id = req.params.id;
	console.log(id);
	db.serviceClients.findOne({_id : mongojs.ObjectId(id)},function(err,doc){
res.json(doc);
		});
	});
/*app.put("/serviceClients/:id",function(req,res){
console.log(req.body);
//var id = req.body;
db.serviceClients.findAndModify({_id : mongojs.ObjectId(req.params.id)},{$set : {name : req.body.name}},function(err,doc){
		res.json(doc);
	});
});*/
app.listen(3000);

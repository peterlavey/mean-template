module.exports = (app, Express, bodyParser)=>{
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(Express.static(__dirname + '/public'));
};

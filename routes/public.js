module.exports = app =>{
  app.get('/', (req, res)=> res.sendfile('./public/app/views/index.html'));
};

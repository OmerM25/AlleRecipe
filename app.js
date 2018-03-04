const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

<<<<<<< HEAD
fs.readFile('public/index.html', (err, html) => {
   if(err) {
       throw err;
   }
=======
>>>>>>> 488ef0ac918da9d75183bb8eeb76bb0822f2c36a

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index')
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

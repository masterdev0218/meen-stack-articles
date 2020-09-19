const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Article = require('./models/article');
const { PORT, mongoUri } = require('./config/config');
const articleRouter = require('./routes/article.routes');
const methodOverride = require('method-override');

const path = require('path');

const article_controller = require('./controllers/article.controllers');

mongoose.Promise = global.Promise;
mongoose
	.connect(mongoUri, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(
		() => {
			console.log('MongoDB database is connected');
		},
		(err) => {
			console.log('Failed to connect to the database' + err);
		}
	);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// app.get('/', article_controller.article_list);

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc'
  })
  res.render('articles/index', {
    articles: articles
  })
});

app.use('/articles', articleRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
	console.log('Server is running on Port:', PORT);
});

const express = require('express');
const mongoose = require('mongoose');
const { PORT, mongoUri } = require('./config/config');
const Article = require('./models/article');
const articleRouter = require('./routes/article.routes');
const methodOverride = require('method-override');
const app = express();

// mongoose.connect('mongodb://localhost/articles', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

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

app.get('/', async (req, res) => {
	const articles = await Article.find().sort({ createdAt: 'desc' });
	res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(PORT, function () {
	console.log('Server is running on Port:', PORT);
});

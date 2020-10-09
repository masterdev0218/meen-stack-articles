const express = require('express');
const router = express.Router();

const article_controller = require('../controllers/article.controllers');

router.get('/new', article_controller.new_article);
router.get('/about', (req, res) =>
	res.render('articles/about', { title: 'About' })
);
router.get('/contact', article_controller.fetch_github_profile);
router.get('/edit/:id', article_controller.find_to_edit);
router.get('/:slug', article_controller.find_to_show);
router.post(
	'/',
	article_controller.presave_new_article,
	saveArticleAndRedirect('new')
);
router.put(
	'/:id',
	article_controller.presave_edited_article,
	saveArticleAndRedirect('edit')
);
router.delete('/:id', article_controller.delete_article);

function saveArticleAndRedirect(path) {
	return async (req, res) => {
		let article = req.article;
		// let { title, summary, markdown } = req.article
		article.imageUrl = req.body.imageUrl;
		article.imageCredit = req.body.imageCredit;
		article.title = req.body.title;
		article.summary = req.body.summary;
		article.markdown = req.body.markdown;
		article.createdAt = Date.now();
		try {
			article = await article.save();
			res.redirect(`/articles/${article.slug}`);
			// res.redirect(`/articles`);
		} catch (e) {
			res.render(`articles/${path}`, { article: article });
		}
	};
}

module.exports = router;

const express = require('express');
const Article = require('../models/article');
const router = express.Router();

const article_controller = require('../controllers/article.controllers');

router.get('/new', article_controller.new_article);
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
		article.title = req.body.title;
		article.description = req.body.description;
		article.markdown = req.body.markdown;
		try {
			article = await article.save();
			res.redirect(`/articles/${article.slug}`);
		} catch (e) {
			res.render(`articles/${path}`, { article: article });
		}
	};
}

module.exports = router;

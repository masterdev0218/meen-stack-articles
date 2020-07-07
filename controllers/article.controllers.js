const Article = require('../models/article');

// Display new article
exports.new_article = async (req, res) => {
	try {
		res.render('articles/new', { article: new Article() });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Find article to edit
exports.find_to_edit = async (req, res) => {
	try {
		const article = await Article.findById(req.params.id);
		res.render('articles/edit', { article: article });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Find article to display
exports.find_to_show = async (req, res) => {
	try {
		const article = await Article.findOne({ slug: req.params.slug });
		if (article == null) res.redirect('/');
		res.render('articles/show', { article: article });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Presave new article
exports.presave_new_article = async (req, res, next) => {
	try {
		req.article = new Article();
		next();
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Presave edited article
exports.presave_edited_article = async (req, res, next) => {
	try {
			req.article = await Article.findById(req.params.id);
			next();
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Delete article
exports.delete_article = async (req, res) => {
	try {
		await Article.findByIdAndDelete(req.params.id);
		res.redirect('/');
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

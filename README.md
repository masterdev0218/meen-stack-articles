# :zap: MEEN Stack Articles

* This app displays articles written using markup language in Bootstrap cards. It uses the MongoDB, Express, Ejs & Node.js (MEEN) stack to perform Create, Read, Update and Delete (CRUD) operations.

**Note:** to open web links in a new window use: _ctrl+click on link_

## :page_facing_up: Table of contents

* [:zap: MEEN Stack Articles](#zap-meen-stack-articles)
	* [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
	* [:books: General info](#books-general-info)
	* [:camera: Screenshots](#camera-screenshots)
	* [:signal_strength: Technologies](#signal_strength-technologies)
	* [:floppy_disk: Setup](#floppy_disk-setup)
	* [:computer: Code Examples](#computer-code-examples)
	* [:cool: Features](#cool-features)
	* [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
	* [:clap: Inspiration](#clap-inspiration)
	* [:envelope: Contact](#envelope-contact)

## :books: General info

* The EJS (Express JS) template engine enables the use of static template files with dynamic content. It is faster and simpler than Angular or React but has less features.
* Partials used to be able to reuse the same code, eg header.ejs - which includes the Bootstrap CDN link & navbar.ejs - a common top navigation bar.

## :camera: Screenshots

![Example screenshot](./img/mongodb.png)

## :signal_strength: Technologies

* [EJS v3](https://ejs.co/#promo) Embedded Javascript templating to generate HTML markup
* [Express method-override](http://expressjs.com/en/resources/middleware/method-override.html) to be able to use HTTP verbs PUT or DELETE
* [Express v4](https://expressjs.com/) framework for Node.js
* [Mongoose v5](https://mongoosejs.com/)
* [cors](https://www.npmjs.com/package/cors) Cross Origin Resource Sharing Connect/Express middleware
* [marked](https://www.npmjs.com/package/marked) to convert between markdown and html
* [node-fetch v2](https://www.npmjs.com/package/node-fetch) light-weight npm module that adds a window.fetch compatible API to Node.js, used here to fetch my data fromt he Github API
* [Material Icons](https://material.io/resources/icons/?style=baseline) svg data used to create a `public/images` folder of icons I can reuse

* [blindtextgenerator Lorem Ipsum](https://www.blindtextgenerator.com/lorem-ipsum) to create text to fill cards for testing

## :floppy_disk: Setup

* `npm run dev` to run Ejs client and backend server concurrently. Navigate to `http://localhost:4000/` to see frontend (refresh after changes - does not auto-update).

## :computer: Code Examples

* extract from `controllers.js` to get length of articles array and convert this to a variable `totalArticles` to be used in `index.ejs` to show total number of articles. Variable `articlesString` also created in `controllers.js` and used in the html markup to show the word `article` or `articles`.

```javascript
// Display articles list in date order
exports.article_list = async (req, res) => {
	try {
		const articles = await Article.find().sort({ createdAt: 'desc' });
		const totalArticles = articles.length;
		const articlesString = articles.length === 1 ? ' article' : ' articles';
		res.render('articles/index', {
			articles,
			totalArticles,
			articlesString,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
```

```html
		<div class="d-flex justify-content-center pt-3 pl-2">
			<div class="alert alert-success border-dark p-2 mb-1" role="alert">
				<p class="mb-0 text-center">
					You have
					<span class="badge badge-pill badge-light" style="font-size: 18px"
						><%= totalArticles%></span
					><%= articlesString %>
				</p>
			</div>
		</div>
```

## :cool: Features

* The backend code separates Express controller functions from routes: routes forward requests to the applicable controllers and controllers read/write data using models.
* Updating an article will automatically update the date so it goes to the front of the (date-sorted) notes list

## :clipboard: Status & To-Do List

* Status: Working. Refactor - add functionality.
* To-Do: Add modals/toasts to say if title is repeated etc. Add markdown editor?

## :clap: Inspiration

* [Web Dev Simplified: How To Build A Markdown Blog Using Node.js, Express, And MongoDB](https://www.youtube.com/watch?v=1NrHkjlWVhM)
* [Building a Simple CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)
* [MDN Web DOcs: Express Tutorial Part 4: Routes and controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)

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

* Uses the EJS (Express JS) template engine to be able to use static template files with dynamic content. It is faster and simpler than Angular or React but has less features
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

* [blindtextgenerator Lorem Ipsum](https://www.blindtextgenerator.com/lorem-ipsum) to create text to fill publications cards for testing

## :floppy_disk: Setup

* `npm run dev` to run Ejs client and backend server concurrently. Navigate to `http://localhost:4000/` to see frontend (refresh after changes - does not auto-update).

## :computer: Code Examples

*

```javascript


```

## :cool: Features

* In dev - Front and backends are run with one command
* backend code separates Express controller functions from routes
* TO DO: Updating an article will automatically update the date so it goes to the front of the (date-sorted) notes list

## :clipboard: Status & To-Do List

* Status: Working. Refactor - add functionality.
* To-Do: Add modals/toasts to say if title is repeated etc. Add markdown editor?

## :clap: Inspiration

* [Web Dev Simplified: How To Build A Markdown Blog Using Node.js, Express, And MongoDB](https://www.youtube.com/watch?v=1NrHkjlWVhM)
* [Building a Simple CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)

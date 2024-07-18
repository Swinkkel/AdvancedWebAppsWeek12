var express = require('express');
var router = express.Router();

const Book = require("../models/Book")

/* GET home page. */
router.post('/book', async function(req, res, next) {
    const {author, name, pages} = req.body;

    try {
        book = new Book({
            author: author,
            name: name,
            pages: pages
          });
  
        console.log("Try to save book")

        await book.save();
        res.status(201).json(book);
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
      }
});

module.exports = router;

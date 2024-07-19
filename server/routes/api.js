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

router.get('/book/:name', async function(req, res, next) {
    try {
        const bookName = req.params.name;
        const book = await Book.findOne({ name: decodeURIComponent(bookName) });
        if (!book) {
          return res.status(404).json({ error: 'This is not the webpage you are looking for' });
        }
        res.json(book);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

module.exports = router;

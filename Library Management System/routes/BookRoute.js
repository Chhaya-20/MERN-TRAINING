const express = require('express')
const router = express.Router();
//const ctr = require("../contollers/AddBook.js")
const ctr = require("../contollers/Book.js")
// n=""
// function m()
// {
//     n=req.body.name;
// }
//GET ALLL BOOKS
router.get("/",ctr.getbooks);

//ADD A BOOK
router.post("/",ctr.Addbooks);

//DELETE BOOK
router.delete("/:id",ctr.RemoveBook)

//FIND A BOOK BY ID
router.get("/:id",ctr.FindBook)

//UPDATE A BOOK BY ID
router.put("/:id",ctr.UpdateBook)

//BORROW A BOOK
router.get("/borrow/:id",ctr.BorrowBook)

//RETURN A BOOK
router.get("/return/:id",ctr.ReturnBook)
module.exports = router
const Books = require("../models/BookModel.js");

//GET ALL BOOKS
exports.getbooks = async (req, res) => {
  try {
    const result = await Books.find();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(400).send("No book present");
    }
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

//ADD A BOOK
exports.Addbooks = async (req, res) => {
  const { title, author, isBorrowed, id } = req.body;
  if (!title || !author || !id) {
    return res.status(400).send("Please enter all required fields");
  }
  result = await Books.findOne({ id: id });
  if (result) {
    res.status(400).send("Already Book exist with thi id ");
  } else {
    try {
      const book = new Books(req.body);
      book
        .save()
        .then(() => {
        res.status(200).send("Sucessfully Added..");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Internal Server error");
        });
    } catch (error) {
      res.status(500).send("Internal Server error");
    }
  }
};

//REMOVING A BOOK
exports.RemoveBook = async (req, res) => {
  id = req.params.id;
  try {
    result = await Books.findOne({ id: id });

    if (result == null) {
      res.status(400).send("No Book exist with this id ");
    } else {
      await Books.findOneAndDelete({ id: id });

      res.status(200).send("Sucessfully Removed..");
    }
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};
//FIND A BOOK BY ID
exports.FindBook = async (req, res) => {
  id = req.params.id;
  try {
    result = await Books.findOne({ id: id });

    if (result == null) {
      res.status(400).send("No Book exist with this id ");
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error");
  }
};

//UPDATE BOOK
exports.UpdateBook = async (req, res) => {
  const info = req.body;
  id = req.params.id;

  try {
    result = await Books.findOne({ id: id });

    if (result == null) {
      res.status(400).send("No Book exist with this id ");
    } else {
      await Books.findOneAndUpdate({ id: id }, info);
      res.status(200).send("Sucessfully Updated..");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error");
  }
};

//BORROW BOOK BY ID
exports.BorrowBook = async (req, res) => {
  id = req.params.id;
  try {
    result = await Books.findOne({ id: id });

    if (result == null) {
      res.status(400).send("No Book exist with this id ");
    } else {
      if (result.isBorrowed) {
        return res.status(400).send("Already Borrowed..");
      } else {
        await Books.findOneAndUpdate({ id: id }, { isBorrowed: true });
        return res.status(200).send("Sucessfully Borrowed..");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error");
  }
};

//RETURN A BOOK
exports.ReturnBook = async (req, res) => {
  id = req.params.id;
  try {
    result = await Books.findOne({ id: id });

    if (result == null) {
      res.status(400).send("No Book exist with this id ");
    } else {
      await Books.findOneAndUpdate({ id: id }, { isBorrowed: false });
      res.status(200).send("Sucessfully Returned..");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error");
  }
};

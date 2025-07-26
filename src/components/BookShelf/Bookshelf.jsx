import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const updatedBook = structuredClone(newBook);
    updatedBook[event.target.name] = event.target.value;
    setNewBook(updatedBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevState) => [...prevState, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <h1>My Bookshelf</h1>
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form>
          <label>Title:</label>
          <input
            name="title"
            onChange={handleInputChange}
            value={newBook.title}
          ></input>
          <label>Author:</label>
          <input
            name="author"
            onChange={handleInputChange}
            value={newBook.author}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => {
          return (
            <div className="bookCard">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookshelf;

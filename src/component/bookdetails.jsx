import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/bookdetails.css';
import Books from '../data/booklist.json';
import every from '../data/Images/every.jpg'
import happiness from '../data/Images/happiness.jpg'
import life from '../data/Images/life.jpg'
import titleImg from '../data/Images/title.jpg'

const images = {
  'every.jpg': every,
  'happiness.jpg': happiness,
  'life.jpg': life,
  'title.jpg': titleImg,
};
const buyBook = () => {
  alert('Thank you for your purchase! Proceeding to payment gateway.');
  // Here you can add logic to redirect to payment gateway or process payment
}

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  const book = Books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div>
        <p>Book not found.</p>
        <Link to="/booklist">Back to list</Link>
      </div>
    );
  }

  const src = images[book.image] || titleImg;

  return (

    <div className="book-details">
      <div className="book-image">
        <p><img src={src} alt={book.title} style={{ width: 300 }} /></p>
        <p><Link to="/booklist">Back to list</Link></p>
      </div>
      <div> <p><strong>Author:</strong> {book.author}</p>
       <p><strong>Year:</strong> {book.year_published}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Cost:</strong> {book.cost}</p>
       <button onClick={()=>buyBook()} className='buy-now'>Buy Now</button></div>
    </div>
  );
};

export default BookDetails;

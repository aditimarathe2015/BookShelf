import React from 'react';
import { useNavigate } from 'react-router-dom';
import Books from '../data/booklist.json'
import every from '../data/Images/every.jpg'
import happiness from '../data/Images/happiness.jpg'
import life from '../data/Images/life.jpg'
import titleImg from '../data/Images/title.jpg'
import '../css/booklist.css';

const bookImages ={
    'every.jpg':every,
    'happiness.jpg':happiness,
    'life.jpg':life,
    'title.jpg':titleImg,
}
 
// navigate to BookDetails using a centralized helper so routing is used consistently
function BookListComponent() {
    const navigate = useNavigate();

    // centralized navigation method for a selected book
    const bookDetails = (id) => {
        navigate(`/bookdetails/${id}`);
    };

    return (
        <div>
            <h1>Book List</h1>

            <div className="book-grid">
                {Books.map((book) => (
                    <div className="book-item" key={book.id}>
                        <img
                            src={bookImages[book.image]}
                            alt={book.title}
                            onClick={() => bookDetails(book.id)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>{book.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookListComponent;
import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import gatsby from '../assets/gatsby.jpeg';
import orwell from '../assets/orwell.jpg';
import mockingbird from '../assets/mockingbird.jpg';
import harry from '../assets/harry.jpg';
import notebook from '../assets/notebook.jpg';
import hating from '../assets/hating_game.jpeg';
import hobbit from '../assets/hobbit.jpg';
import pride from '../assets/pride.jpg';
import dune from '../assets/dune.jpg';
import brave from '../assets/brave.jpg';
import daVinciCode from '../assets/davinci.jpg';
import gonegirl from '../assets/gonegirl.jpg';
import sapiens from '../assets/sapiens.jpg';
import hungerGames from '../assets/hunger.jpg';
import dragon from '../assets/dragon.jpg';

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '₹ 10', originalPrice: '₹ 15', discount: 33, rating: 4.2, numRatings: 2150, image: gatsby, category: 'fiction' },
    { id: 2, title: '1984', author: 'George Orwell', price: '₹ 15', originalPrice: '₹ 20', discount: 25, rating: 4.6, numRatings: 3124, image: orwell, category: 'sci-fi' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '₹ 12', originalPrice: '₹ 16', discount: 25, rating: 4.8, numRatings: 2450, image: mockingbird, category: 'fiction' },
    { id: 4, title: 'Harry Potter Deathly Hallows', author: 'J.K. Rowling', price: '₹ 20', originalPrice: '₹ 25', discount: 20, rating: 4.9, numRatings: 5241, image: harry, category: 'fiction' },
    { id: 5, title: 'The Notebook', author: 'Nicholas Sparks', price: '₹ 8', originalPrice: '₹ 12', discount: 33, rating: 4.1, numRatings: 1320, image: notebook, category: 'romance' },
    { id: 6, title: 'The Hating Game', author: 'Sally Thorne', price: '₹ 9', originalPrice: '₹ 13', discount: 31, rating: 4.3, numRatings: 988, image: hating, category: 'romance' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: '₹ 18', originalPrice: '₹ 24', discount: 25, rating: 4.7, numRatings: 4105, image: hobbit, category: 'fantasy' },
    { id: 8, title: 'Pride and Prejudice', author: 'Jane Austen', price: '₹ 14', originalPrice: '₹ 18', discount: 22, rating: 4.5, numRatings: 3540, image: pride, category: 'romance' },
    { id: 9, title: 'Dune', author: 'Frank Herbert', price: '₹ 25', originalPrice: '₹ 30', discount: 17, rating: 4.6, numRatings: 2891, image: dune, category: 'sci-fi' },
    { id: 10, title: 'Brave New World', author: 'Aldous Huxley', price: '₹ 22', originalPrice: '₹ 28', discount: 21, rating: 4.4, numRatings: 2204, image: brave, category: 'sci-fi' },
    { id: 11, title: 'The Da Vinci Code', author: 'Dan Brown', price: '₹ 18', originalPrice: '₹ 23', discount: 22, rating: 4.3, numRatings: 3982, image: daVinciCode, category: 'mystery' },
    { id: 12, title: 'Gone Girl', author: 'Gillian Flynn', price: '₹ 16', originalPrice: '₹ 21', discount: 24, rating: 4.1, numRatings: 2459, image: gonegirl, category: 'thriller' },
    { id: 13, title: 'Sapiens', author: 'Yuval Noah Harari', price: '₹ 20', originalPrice: '₹ 26', discount: 23, rating: 4.9, numRatings: 5490, image: sapiens, category: 'non-fiction' },
    { id: 14, title: 'The Hunger Games', author: 'Suzanne Collins', price: '₹ 15', originalPrice: '₹ 19', discount: 21, rating: 4.7, numRatings: 3223, image: hungerGames, category: 'dystopian' },
    { id: 15, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', price: '₹ 17', originalPrice: '₹ 22', discount: 23, rating: 4.2, numRatings: 2144, image: dragon, category: 'mystery' },
];


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const BookList = () => {
    const query = useQuery();
    const search = query.get('search') ? query.get('search').trim().toLowerCase() : '';
    const category = query.get('category') ? query.get('category').toLowerCase() : '';

    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category ? book.category === category : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container style={{ backgroundColor: '#fefae0', borderRadius: '10px',padding:'30px'}}>
            <center><h2 className="my-4 text-main">Books Collection</h2></center>

            {(search || category) && (
                <p className="text-main">
                    {search && `Showing results for "${search}"`}
                    {search && category && ' in '}
                    {category && `category "${category}"`}
                </p>
            )}

            <Row>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <Col key={book.id} sm={6} md={3} className="mb-4">
                            <Card className="shadow-sm h-100" style={{ transition: 'transform 0.3s ease' }}>
                                <Card.Img
                                    variant="top"
                                    src={book.image || 'https://via.placeholder.com/150'}
                                    alt={book.title}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>Author: {book.author}</Card.Text>

                                    <Card.Text>
                                        <b><big><span className="ms-2 text-danger">{book.price}</span></big></b> &nbsp; &nbsp;
                                        <span style={{ textDecoration: 'line-through', color: 'gray' }}>{book.originalPrice}</span>
                                    </Card.Text>

                                    {/* Discount Percentage */}
                                    {book.discount && (
                                        <span className="badge bg-success rounded-circle" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                            {book.discount}% OFF
                                        </span>
                                    )}

                                    {/* Star Rating and Number of Ratings */}
                                    <div className="d-flex align-items-center mb-2">
                                        <span className="me-2" style={{ color: '#FFD700' }}>
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <FaStar key={index} style={{ color: index < Math.round(book.rating) ? '#FFD700' : '#E4E5E9' }} />
                                            ))}
                                        </span>
                                        <small>{book.rating}</small>&nbsp;<span>({book.numRatings})</span>
                                    </div>

                                    <Button as={Link} to={`/book/${book.id}`} className="btn-custom mt-auto mb-2" style={{ backgroundColor: '#283618', borderColor: '#283618', color: 'white' }}>More Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-main">No books found matching your criteria.</p>
                )}
            </Row>
        </Container>
    );
};

export default BookList;
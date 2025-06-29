import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useCart } from './CartContext';
import '../App.css';

// Import your images
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

// Array of books
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$ 10', originalPrice: '$ 15', discount: '33%', rating: 4.2, image: gatsby, category: 'fiction', description: 'A novel set in the Roaring Twenties about the mysterious Jay Gatsby.', story: 'Gatsby’s love for Daisy Buchanan leads him to amass a fortune in hopes of winning her back.' },
    { id: 2, title: '1984', author: 'George Orwell', price: '$ 15', originalPrice: '$ 22', discount: '32%', rating: 4.7, image: orwell, category: 'sci-fi', description: 'A dystopian novel that explores the dangers of totalitarianism.', story: 'Winston Smith, a member of the Outer Party, seeks truth and freedom in a world controlled by Big Brother.' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$ 12', originalPrice: '$ 18', discount: '33%', rating: 4.5, image: mockingbird, category: 'fiction', description: 'A novel about the serious issues of race and rape, seen through the eyes of a child.', story: 'Scout Finch grows up in a racially charged Southern town, learning about justice and morality.' },
    { id: 4, title: 'Harry Potter Deathly Hallows', author: 'J.K. Rowling', price: '$ 20', originalPrice: '$ 28', discount: '29%', rating: 4.9, image: harry, category: 'fiction', description: 'The final book in the Harry Potter series, where Harry confronts Voldemort.', story: 'Harry, Ron, and Hermione embark on a perilous quest to find and destroy Voldemort’s Horcruxes.' },
    { id: 5, title: 'The Notebook', author: 'Nicholas Sparks', price: '$ 8', originalPrice: '$ 12', discount: '33%', rating: 4.3, image: notebook, category: 'romance', description: 'A romantic story of love and loss.', story: 'An elderly man reads to a woman in a nursing home, telling their love story.' },
    { id: 6, title: 'The Hating Game', author: 'Sally Thorne', price: '$ 9', originalPrice: '$ 13', discount: '31%', rating: 4.0, image: hating, category: 'romance', description: 'A fun and flirty office romance.', story: 'Lucy and Joshua are coworkers who share a mutual hatred that turns into something more.' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: '$ 18', originalPrice: '$ 25', discount: '28%', rating: 4.8, image: hobbit, category: 'fantasy', description: 'A fantasy novel about the adventures of Bilbo Baggins.', story: 'Bilbo goes on an unexpected journey with a group of dwarves to reclaim their homeland.' },
    { id: 8, title: 'Pride and Prejudice', author: 'Jane Austen', price: '$ 14', originalPrice: '$ 20', discount: '30%', rating: 4.6, image: pride, category: 'romance', description: 'A romantic novel that explores themes of love and social standing.', story: 'Elizabeth Bennet navigates the complexities of love and relationships in early 19th-century England.' },
    { id: 9, title: 'Dune', author: 'Frank Herbert', price: '$ 25', originalPrice: '$ 32', discount: '22%', rating: 4.4, image: dune, category: 'sci-fi', description: 'A science fiction novel set in a distant future amidst a huge interstellar empire.', story: 'Paul Atreides rises to power amidst the political intrigue of the desert planet Arrakis.' },
    { id: 10, title: 'Brave New World', author: 'Aldous Huxley', price: '$ 22', originalPrice: '$ 30', discount: '27%', rating: 4.3, image: brave, category: 'sci-fi', description: 'A novel about a dystopian future where society is conditioned to be happy.', story: 'In a world of engineered happiness, Bernard Marx questions the price of conformity.' },
    { id: 11, title: 'The Da Vinci Code', author: 'Dan Brown', price: '$ 18', originalPrice: '$ 24', discount: '25%', rating: 4.1, image: daVinciCode, category: 'mystery', description: 'A mystery thriller about a murder in the Louvre Museum.', story: 'Robert Langdon uncovers a hidden truth about history and the secrets of the Holy Grail.' },
    { id: 12, title: 'Gone Girl', author: 'Gillian Flynn', price: '$ 16', originalPrice: '$ 23', discount: '30%', rating: 4.0, image: gonegirl, category: 'thriller', description: 'A psychological thriller about a woman who goes missing.', story: 'Nick Dunne becomes the prime suspect in the disappearance of his wife, Amy.' },
    { id: 13, title: 'Sapiens', author: 'Yuval Noah Harari', price: '$ 20', originalPrice: '$ 26', discount: '23%', rating: 4.5, image: sapiens, category: 'non-fiction', description: 'A brief history of humankind.', story: 'Harari explores the history and impact of Homo sapiens on the world.' },
    { id: 14, title: 'The Hunger Games', author: 'Suzanne Collins', price: '$ 15', originalPrice: '$ 20', discount: '25%', rating: 4.3, image: hungerGames, category: 'dystopian', description: 'A dystopian novel about a competition where children fight to the death.', story: 'Katniss Everdeen volunteers to take her sister’s place in the deadly games.' },
    { id: 15, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', price: '$ 17', originalPrice: '$ 22', discount: '23%', rating: 4.4, image: dragon, category: 'mystery', description: 'A mystery thriller about a journalist and a hacker.', story: 'Mikael Blomkvist and Lisbeth Salander investigate a decades-old disappearance.' },
];

const BookDetails = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const [book] = useState(() => books.find(b => b.id === Number(id)));
    const [userReview, setUserReview] = useState('');
    const [reviews, setReviews] = useState([]);

    // Fetch reviews from localStorage on component mount
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];
        setReviews(storedReviews);
    }, [id]);

    if (!book) return <p>Book not found.</p>;

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isAlreadyInCart = cart.some(item => item.id === book.id);

        if (!isAlreadyInCart) {
            cart.push(book);
            localStorage.setItem('cart', JSON.stringify(cart));
            addToCart(book);
            alert('Added to cart!');
        } else {
            alert('This item is already in your cart!');
        }
    };

    const handleReviewChange = (event) => {
        setUserReview(event.target.value);
    };

    const submitReview = () => {
        if (userReview.trim() !== '') {
            const newReviews = [...reviews, userReview];
            setReviews(newReviews);
            localStorage.setItem(`reviews_${id}`, JSON.stringify(newReviews));
            setUserReview('');
            alert('Review submitted!');
        } else {
            alert('Please write a review before submitting.');
        }
    };

    return (
        <Container className="book-details-page">
            <Row className="my-4">
                <Col md={6}>
                    <Card.Img
                        variant="top"
                        src={book.image}
                        alt={book.title}
                        style={{
                            height: '100%',
                            width: '60%',
                            maxWidth: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px',
                        }}
                    />
                </Col>
                <Col md={6}>
                    <Card className="h-100" style={{ backgroundColor: 'transparent', border: 'none', transition: 'none' }}>
                        <Card.Body style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                            <Card.Title>
                                <h2>{book.title}</h2>
                            </Card.Title>
                            <Card.Text style={{ fontSize: '1.2em' }}>
                                <strong>Author:</strong> {book.author} <br />
                                <strong>Rating:</strong> {book.rating} ⭐ <br />
                                <strong>Price:</strong>{' '}
                                <big>
                                    <span style={{ color: 'green' }}>{book.price}</span>
                                </big>
                                <small style={{ textDecoration: 'line-through', color: 'gray' }}>
                                    {book.originalPrice}
                                </small>{' '}
                                <br />
                                <strong>Discount:</strong> {book.discount} off <br />
                                <strong>Description:</strong> {book.description} <br />
                                <strong>Story:</strong> {book.story} <br />
                            </Card.Text>
                            <Button variant="success" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>{' '}
                            &nbsp; &nbsp;
                            <Button
                                variant="primary"
                                onClick={() => alert('Feature coming soon!')}
                                className="ml-2"
                            >
                                Buy Now
                            </Button>
                            <div className="mt-3">
                                <Button as={Link} to="/" variant="secondary">
                                    Back to Books
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Reviews:</h3>
                    {reviews.length === 0 ? (
                        <p>No reviews yet.</p>
                    ) : (
                        reviews.map((review, index) => <p key={index}>{review}</p>)
                    )}
                    <Form>
                        <Form.Group controlId="formUserReview">
                            <Form.Label>Your Review:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={userReview} onChange={handleReviewChange} />
                        </Form.Group>
                        <br />
                        <Button variant="success" onClick={submitReview}>
                            Submit Review
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default BookDetails;
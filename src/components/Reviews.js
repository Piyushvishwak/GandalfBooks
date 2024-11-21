import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Reviews = ({ reviews, onAddReview }) => {
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(5);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        onAddReview({ text: newReview, rating: newRating });
        setNewReview('');
        setNewRating(5);
    };

    return (
        <div>
            <h3>Customer Reviews</h3>
            {reviews.map((review, index) => (
                <Card key={index} className="mb-2">
                    <Card.Body>
                        <Card.Text>Rating: {review.rating} ⭐</Card.Text>
                        <Card.Text>{review.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
            <Form onSubmit={handleReviewSubmit} className="mt-4">
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="number"
                        min="1"
                        max="5"
                        value={newRating}
                        onChange={(e) => setNewRating(Number(e.target.value))}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Review</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Review
                </Button>
            </Form>
        </div>
    );
};

export default Reviews;

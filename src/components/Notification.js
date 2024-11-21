import React, { useState } from 'react';
import { Container, Card, Button, ListGroup, Badge } from 'react-bootstrap';

const NotificationPage = () => {
    // Initial dummy notifications
    const [notifications, setNotifications] = useState([
        { id: 1, text: 'Your order has been shipped!', isRead: false },
        { id: 2, text: 'New message from customer support.', isRead: false },
        { id: 3, text: 'Your profile was viewed 5 times today.', isRead: true },
        { id: 4, text: 'You have a new friend request.', isRead: false },
        { id: 5, text: 'Your payment was successful.', isRead: true },
    ]);

    // Function to mark notification as read
    const markAsRead = (id) => {
        setNotifications(notifications.map((notif) =>
            notif.id === id ? { ...notif, isRead: true } : notif
        ));
    };

    // Function to delete a notification
    const deleteNotification = (id) => {
        setNotifications(notifications.filter((notif) => notif.id !== id));
    };

    return (
        <Container className="mt-4">
            <h2>Notifications</h2>
            <ListGroup>
                {notifications.map((notification) => (
                    <ListGroup.Item key={notification.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <Card.Text style={{ color: notification.isRead ? 'gray' : 'black' }}>
                                {notification.text}
                                {!notification.isRead && <Badge bg="primary" className="ms-2">New</Badge>}
                            </Card.Text>
                        </div>
                        <div>
                            {!notification.isRead && (
                                <Button variant="success" size="sm" onClick={() => markAsRead(notification.id)}>
                                    Mark as Read
                                </Button>
                            )}
                            <Button variant="danger" size="sm" className="ms-2" onClick={() => deleteNotification(notification.id)}>
                                Delete
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
                {notifications.length === 0 && (
                    <Card.Text className="text-center text-muted mt-3">No new notifications</Card.Text>
                )}
            </ListGroup>
        </Container>
    );
};

export default NotificationPage;

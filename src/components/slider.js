import React from 'react';
import Slider from 'react-slick';
import bookImage1 from '../assets/slider1.jpg';
import bookImage2 from '../assets/slider2.jpg';
import bookImage3 from '../assets/slider3.jpg';
import bookImage4 from '../assets/slider4.jpg';
import bookImage5 from '../assets/slider5.jpg';
import bookImage6 from '../assets/slider6.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BookSlider = () => {
    const sliderStyles = {
        bookSlider: {
            maxWidth: '100%',
            margin: 'auto auto',
            textAlign: 'center',
            overflow: 'hidden',
            backgroundColor: '#fefae0',
        },
        sliderItem: {
            textAlign: 'center',
        },
        sliderImage: {
            maxWidth: '70%',
            margin: '20px auto',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
        },
        sliderOffer: {
            position: 'relative',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            padding: '5px 10px',
            fontSize: '1.2rem',
            backgroundColor: '#283618',
            borderRadius: '5px',
            zIndex: 1,
            width: 'fit-content',
        },
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const books = [
        { image: bookImage1, offer: '30% OFF on Bestsellers!' },
        { image: bookImage2, offer: 'Buy 2 Get 1 Free!' },
        { image: bookImage3, offer: '25% OFF on New Arrivals!' },
        { image: bookImage4, offer: 'Flash Sale: 50% OFF!' },
        { image: bookImage5, offer: 'Free Shipping on Orders Over $50!' },
        { image: bookImage6, offer: 'Exclusive: Pre-order Your Favorites!' },
    ];

    return (
        <div style={sliderStyles.bookSlider}>
            <Slider {...settings}>
                {books.map((book, index) => (
                    <div key={index} style={sliderStyles.sliderItem}>
                        <img src={book.image} alt={`Book ${index + 1}`} style={sliderStyles.sliderImage} />
                        <div style={sliderStyles.sliderOffer}>{book.offer}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BookSlider;

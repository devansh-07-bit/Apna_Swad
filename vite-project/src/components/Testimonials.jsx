import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Nikita Bharate",
            location: "Pune, India",
            text: "It was a Great Experience, and Food Quality Was Amazing.",
            image: "path_to_image_1.jpg"
        },
        {
            id: 2,
            name: "Devansh Asati",
            location: "Pune, India",
            text: "It was a Great Experience, and Food Quality Was Amazing.",
            image: "path_to_image_2.jpg"
        },
        {
            id: 3,
            name: "Shrusti Jadhav",
            location: "Pune, India",
            text: "It was a Great Experience, and Food Quality Was Amazing.",
            image: "path_to_image_3.jpg"
        },
        {
            id: 4,
            name: "Tanush Kartiye",
            location: "Pune, India",
            text: "It was a Great Experience, and Food Quality Was Amazing.",
            image: "path_to_image_4.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 2) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? testimonials.length - 2 : prevSlide - 2
        );
    };

    return (
        <div className="testimonial-container">
            <button className="testimonial-arrow testimonial-arrow-left" onClick={prevSlide}>
                &#9665;
            </button>
            <div className="testimonial-wrapper">
                {testimonials.slice(currentSlide, currentSlide + 2).map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-slide">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="testimonial-image"
                        />
                        <h2 className="testimonial-name">{testimonial.name}</h2>
                        <p className="testimonial-location">{testimonial.location}</p>
                        <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                ))}
            </div>
            <button className="testimonial-arrow testimonial-arrow-right" onClick={nextSlide}>
                &#9655;
            </button>

            <div className="testimonial-dots">
                {Array.from({ length: testimonials.length / 2 }).map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index * 2 === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index * 2)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

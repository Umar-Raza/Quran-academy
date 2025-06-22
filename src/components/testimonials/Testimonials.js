import React, { useState } from "react";
import Slider from "react-slick";

export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Ayub Ashraf",
      role: "Qaida and Nazra Student",
      city: "Peshawar, Pakistan",
      text: "Alhamdulillah, I’ve been learning the Quran for one year, and the experience has been amazing. My teacher explains every rule and pronunciation with clarity and care. I feel more confident in my recitation now and look forward to every lesson. Highly recommended for anyone wishing to learn the Quran properly.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Gulam Mustafa",
      role: "Qaida Student",
      city: "South Africa",
      text: "A brilliant service and personally I’ve learned the reading of Quran with proper Arabic accent and pronunciation by taking admission in the Nazra Quran (Quran Reading) Course. The person who teaches me Quran is very knowledgeable and explains each and every point of recitation in an efficient manner.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Qasim",
      role: "Namaz Student",
      city: "United Arab Emirates",
      text: "I am doing Namaz course for few months and get to know about many mistakes which I was making in my Namaz and now I have learned Namaz in a proper manner as prescribed by Sharia.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ];
  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Function to generate avatar background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "#2E8B57", // Sea Green (Islamic theme)
      "#4682B4", // Steel Blue
      "#8B4513", // Saddle Brown
      "#2F4F4F", // Dark Slate Gray
      "#556B2F", // Dark Olive Green
      "#8B008B", // Dark Magenta
      "#B8860B", // Dark Goldenrod
      "#4B0082", // Indigo
      "#800000", // Maroon
      "#008B8B", // Dark Cyan
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Avatar Component with fallback to initials
  const Avatar = ({ testimonial }) => {
    const [imageError, setImageError] = useState(false);

    if (testimonial.image && !imageError) {
      return (
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="rounded-circle"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            border: "4px solid #fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
          onError={() => setImageError(true)}
        />
      );
    }

    // Fallback to initials avatar
    return (
      <div
        className="rounded-circle d-flex align-items-center justify-content-center"
        style={{
        
          backgroundColor: getAvatarColor(testimonial.name),
         
        }}
      >
        {getInitials(testimonial.name)}
      </div>
    );
  };
  return (
    <div className="testimonialsDiv py-12 min-h-screen ">
      <div className="container mx-auto px-4 ">
        <div className="row justify-content-center">
          <div className=" col-12 col-md-8 my-5">
            <div className="testimonialCol">
              <h1 className="display-4 fw-bold text-center">Testimonials</h1>
              <div className="bottomLine mx-auto mb-3"></div>
              <p className="text-muted text-center mb-3">
                Feedback from our students, what they say about us.
              </p>
              <div className="card w-100 p-5 shadow-lg">
                <Slider {...settings} className="testimonial_slider">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial_item">
                      <div className="testimonial_image d-flex justify-content-center mb-4">
                        <Avatar testimonial={testimonial} />
                      </div>
                      <div
                        className="rating d-flex justify-content-center mb-3"
                        style={{ fontSize: "2rem", lineHeight: 1 }}
                      >
                        {"★".repeat(testimonial.rating)}
                        {"☆".repeat(5 - testimonial.rating)}
                      </div>
                      <div className="testimonial_content text-center">
                        <p className="text fst-italic">{testimonial.text}</p>
                        <h4 className="name text-bold">{testimonial.name}</h4>
                        <p className="role text-muted">{testimonial.city}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

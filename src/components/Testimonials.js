// src/components/Testimonials.jsx
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "James T.",
    role: "Car Enthusiast",
    quote: "Carlo helped me find my dream car in no time. The listings are detailed and easy to browse!",
    avatar: "https://www.motortrend.com/uploads/sites/21/2018/04/56_Eric_Cook_1979_Fairmont.jpg?interpolation=lanczos-none&fit=around|660:440?w=768&width=768&q=75&format=webp",
  },
  {
    name: "Sophia L.",
    role: "Auto Dealer",
    quote: "Listing my cars on Carlo gave my sales a huge boost. The platform is professional and sleek.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Girl_in_car.jpg",
  },
  {
    name: "Michael B.",
    role: "Car Collector",
    quote: "I love the gallery and featured cars. Carlo is now my go-to marketplace for premium vehicles.",
    avatar: "https://plus.unsplash.com/premium_photo-1682090164953-780d182efb39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwaW4lMjBjYXJ8ZW58MHx8MHx8fDA%3D",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
  >
    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 border-4 border-blue-100 shadow-inner">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-gray-700 italic mb-4 text-lg md:text-xl">"{testimonial.quote}"</p>
    <h4 className="text-lg md:text-xl font-semibold text-gray-800">{testimonial.name}</h4>
    <span className="text-gray-500 text-sm md:text-base">{testimonial.role}</span>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Users Say
        </h2>

        {/* Grid for md+ */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={i} index={i} />
          ))}
        </div>

        {/* Swiper for mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard testimonial={t} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

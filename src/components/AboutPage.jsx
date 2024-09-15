// src/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our company! We are a team of passionate professionals dedicated to providing top-notch services and solutions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to deliver excellence and innovation in every project we undertake. With years of experience in the industry, we aim to exceed expectations and achieve exceptional results.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We believe in the power of collaboration and continuous improvement. Our team is committed to staying ahead of the curve and embracing new challenges with enthusiasm and expertise.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for visiting our page. We look forward to working with you and helping you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

// FeaturedOpportunitiesSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LabourSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  const opportunities = [
    { id: 1, title: 'Job Opportunity 1', image: 'src/assets/slider1.jpg' },
    { id: 2, title: 'Job Opportunity 2', image: 'src/assets/slider2.jpg' },
    { id: 3, title: 'Job Opportunity 3', image: 'src/assets/slider3.jpg' },
    { id: 4, title: 'Job Opportunity 4', image: 'src/assets/slider4.jpg' },
  ];

  const containerStyle = {
    textAlign: 'center',
  };

  const titleStyle = {
    margin: '20px 0', // Adjust the margin as needed
  };

  const imageSizeStyle = {
    width: '500px',
    height: '300px',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings} className="custom-slider">
        {opportunities.map(opportunity => (
          <div key={opportunity.id} style={{ textAlign: 'center' }}>
            <img src={opportunity.image} alt={opportunity.title} style={imageSizeStyle} />
            <h3 style={{ textAlign: 'center' }}>{opportunity.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LabourSlider;

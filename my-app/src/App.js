import React, { useState, Suspense } from 'react';
import './App.css';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import logo5 from './assets/logo5.png';
import logo6 from './assets/logo6.png';
import ezLogo from './assets/EZ Works Blue@2x.png'; 

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Front-end validation
    if (!email) {
      alert('Email is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return;
    }

    try {
      const response = await fetch('http://3.228.97.110:9000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        alert('Error: email ends with @ez.works.');
      } else if (response.status === 200) {
        alert('Form Submitted.');
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  function getTitle(index) {
    switch (index) {
      case 0:
        return "Presentation design";
      case 1:
        return "Audio-visual production";
      case 2:
        return "Translation services";
      case 3:
        return "Graphic design";
      case 4:
        return "Research and analytics";
      case 5:
        return "Data processing";
      default:
        return "Title";
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="logo-header-section">
          <div className="logo-container">
            <img
              alt="ez_logo"
              src= {ezLogo}
              className="ez_logo_image"
            />
            
          </div>
          <p className="content-1">Suite of Business Support Services</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        <div className="card-container">
          {logos.map((logo, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={logo} alt={`Card Logo ${index + 1}`} className="card-logo" />
                <h2>{getTitle(index)}</h2>
              </div>
              <div className='content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button value ="Contact Me" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

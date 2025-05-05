import React, { useState } from 'react';
import { contactInfo, formInfo } from '../assets/data/contactData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically send the data to a server
    // For now, we'll just simulate a successful submission
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  // Social media icons
  const socialIcons = {
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    )
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkblue font-raleway tracking-tight sm:text-4xl">
            {contactInfo.title}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto my-4"></div>
          <p className="mt-4 text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            {contactInfo.subtitle}
          </p>
        </div>

        {/* Contact content */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Contact Information */}
            <div className="bg-darkblue text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-golden">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-golden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-golden">Our Address</p>
                    <address className="mt-1 not-italic">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}<br />
                      {contactInfo.address.country}
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-golden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-golden">Phone</p>
                    <p className="mt-1">{contactInfo.phone}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-golden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-golden">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="mt-1 block hover:text-golden">{contactInfo.email}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-golden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-golden">Business Hours</p>
                    <p className="mt-1">{contactInfo.hours}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm font-medium text-golden mb-3">Connect With Us</p>
                  <div className="flex space-x-4">
                    {contactInfo.socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-golden transition-colors duration-300"
                        aria-label={`Visit our ${link.platform} page`}
                      >
                        {socialIcons[link.icon]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-2 text-darkblue">{formInfo.title}</h3>
              <p className="text-gray-600 mb-6">{formInfo.subtitle}</p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                  {formInfo.successMessage}
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                {formInfo.fields.map((field) => (
                  <div key={field.id} className="mb-4">
                    <label 
                      htmlFor={field.id} 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label} {field.required && <span className="text-rust">*</span>}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        rows={5}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-golden focus:border-golden"
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.id]}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-golden focus:border-golden"
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.id]}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-rust hover:bg-golden text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
                    aria-label={formInfo.submitButton.ariaLabel}
                  >
                    {formInfo.submitButton.text}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
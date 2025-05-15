/**
 * Contact data for Golden Rock
 * Contact information and form details
 */

// Contact information
const contactInfo = {
    title: "Contact Us",
    subtitle: "Get in touch with our team of experts",
    address: {
      street: "11211 Katy Freeway, Suit 165",
      city: "Houston",
      state: "TX",
      zip: "77079",
      country: "United States"
    },
    phone: "+1 (713) 555-7890",
    email: "admin@goldenrockgroup.us",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM CST",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/goldenrock",
        icon: "linkedin"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/goldenrock",
        icon: "twitter"
      }
    ]
  };
  
  // Form information
  const formInfo = {
    title: "Send Us a Message",
    subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email address",
        required: true
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "How can we help you?",
        required: true
      }
    ],
    submitButton: {
      text: "Send Message",
      ariaLabel: "Submit contact form"
    },
    successMessage: "Thank you for your message. We'll respond shortly."
  };
  
  export { contactInfo, formInfo };
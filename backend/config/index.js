require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  chatGPTAPIKey: process.env.CHATGPT_API_KEY,
  pageAccessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
  parameters: {
    maxTokens: 100,
    temperature: 0.8,
    maxResponseLength: 640,
    responseDelay: 2,
    profanityFilter: true
  },
  businessInfo: {
    name: "AI Chatbot Solutions",
    address: "123 AI Street, Tech City, US",
    phone: "+1-555-123-4567",
    email: "contact@aichatbotsolutions.com",
    website: "https://www.aichatbotsolutions.com",
    socialMedia: {
      facebook: "https://www.facebook.com/aichatbotsolutions",
      instagram: "https://www.instagram.com/aichatbotsolutions",
      twitter: "https://twitter.com/aichatbotsol",
      linkedin: "https://www.linkedin.com/company/aichatbotsolutions"
    },
    workingHours: {
      weekdays: "9am - 6pm",
      weekends: "10am - 4pm"
    },
    services: [
      "Custom AI Chatbot Development",
      "Chatbot Integration",
      "Chatbot Maintenance and Support"
    ],
    pricing: [
      {
        service: "Custom AI Chatbot Development",
        price: "$5000"
      },
      {
        service: "Chatbot Integration",
        price: "$1000"
      },
      {
        service: "Chatbot Maintenance and Support",
        price: "$200 per month"
      }
    ],
    promotions: [
      {
        title: "10% Off for New Customers",
        description: "New customers receive a 10% discount on their first chatbot development project."
      },
      {
        title: "Free Consultation",
        description: "Schedule a free consultation to discuss your chatbot needs and requirements."
      }
    ],
    faqs: [
      {
        question: "How long does it take to develop a custom chatbot?",
        answer: "The development time for a custom chatbot depends on the complexity of the project. On average, it takes 4-6 weeks."
      },
      {
        question: "What platforms do you support?",
        answer: "We support various platforms, including Facebook Messenger, WhatsApp, Slack, and more."
      }
    ],
    customerReviews: [
      {
        name: "John Doe",
        review: "AI Chatbot Solutions did a fantastic job on our chatbot. Highly recommended!"
      },
      {
        name: "Jane Smith",
        review: "Great customer service and excellent work on our chatbot integration."
      }
    ],
    teamMembers: [
      {
        name: "Alice Johnson",
        position: "CEO and Co-founder"
      },
      {
        name: "Bob Williams",
        position: "CTO and Co-founder"
      }
    ],
    awards: [
      "Best AI Chatbot Development Company 2022",
      "Innovation in AI Award 2021"
    ],
    partners: [
      "Facebook",
      "Slack"
    ],
    paymentOptions: [
      "Credit Card",
      "Debit Card",
      "PayPal",
      "Bank Transfer"
    ],
    returnPolicy: "Refunds are evaluated on a case-by-case basis. Please contact us to discuss your situation.",
    shippingInformation: "Not applicable for our services.",
    cancellationPolicy: "Cancellations must be made within 48 hours of project initiation for a full refund. After that, refunds will be prorated based on the work completed.",
    privacyPolicy: "We respect your privacy and handle your data securely. Please visit our website for the full privacy policy.",
    termsOfService: "Please visit our website for the complete terms of service for our chatbot development, integration, and maintenance services."
  }
};

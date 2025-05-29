import React, { useState, useEffect } from 'react';

const IndustryInfoSection = () => {
  const [currentPrice, setCurrentPrice] = useState('$75.84');
  const [priceChange, setPriceChange] = useState('+1.2%');
  const [isPositive, setIsPositive] = useState(true);

  // Simulate price updates (in a real app, this would come from an API)
  useEffect(() => {
    const interval = setInterval(() => {
      const prices = ['$75.84', '$76.12', '$74.95', '$75.67', '$76.34'];
      const changes = ['+1.2%', '+0.8%', '-0.3%', '+0.5%', '+1.8%'];
      const randomIndex = Math.floor(Math.random() * prices.length);
      
      setCurrentPrice(prices[randomIndex]);
      setPriceChange(changes[randomIndex]);
      setIsPositive(changes[randomIndex].startsWith('+'));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Global Oil Demand Projected to Rise in 2025",
      source: "Energy Today",
      time: "2 hours ago",
      category: "Market Analysis",
      link: "#"
    },
    {
      id: 2,
      title: "New Drilling Technologies Reduce Environmental Impact",
      source: "Oil & Gas Journal",
      time: "5 hours ago",
      category: "Technology",
      link: "#"
    },
    {
      id: 3,
      title: "OPEC+ Considers Production Adjustments",
      source: "Reuters Energy",
      time: "8 hours ago",
      category: "Policy",
      link: "#"
    },
    {
      id: 4,
      title: "Renewable Energy Integration in Oil & Gas Operations",
      source: "Energy Transition",
      time: "1 day ago",
      category: "Sustainability",
      link: "#"
    }
  ];

  const keyResources = [
    {
      id: 1,
      title: "U.S. Energy Information Administration",
      description: "Official energy statistics and analysis",
      link: "https://www.eia.gov/",
      icon: (
        <svg className="h-6 w-6 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "International Energy Agency",
      description: "Global energy data and policy insights",
      link: "https://www.iea.org/",
      icon: (
        <svg className="h-6 w-6 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Baker Hughes Rig Count",
      description: "Weekly drilling activity reports",
      link: "https://rigcount.bakerhughes.com/",
      icon: (
        <svg className="h-6 w-6 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="industry-info" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkblue font-raleway tracking-tight sm:text-4xl">
            Industry Information
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto my-4"></div>
          <p className="mt-4 text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest industry news, market data, and essential resources
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Oil Price Widget */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-darkblue to-rust rounded-lg p-6 text-white shadow-xl">
              <h3 className="text-lg font-semibold mb-4 text-golden">Current Oil Price</h3>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentPrice}</div>
                <div className={`text-lg font-medium flex items-center justify-center ${
                  isPositive ? 'text-green-300' : 'text-red-300'
                }`}>
                  {isPositive ? (
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
                    </svg>
                  )}
                  {priceChange}
                </div>
                <div className="text-sm text-cream mt-1">WTI Crude (per barrel)</div>
                <div className="text-xs text-cream/70 mt-2">Last updated: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>

            {/* OPEC MOMR Video Section */}
            <div className="mt-6 bg-cream rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-darkblue mb-4 font-raleway">OPEC Market Report</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                  title="OPEC Monthly Oil Market Report 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Monthly Oil Market Report (MOMR) 2025 - Latest analysis and forecasts
              </p>
              <a 
                // href="https://www.opec.org/monthly-oil-market-report.html"
                href="https://www.youtube.com/watch?v=Hc8nb0YS_SY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-rust hover:text-golden font-medium text-sm transition-colors duration-300"
              >
                View Full Report
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Industry News */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-darkblue mb-6 font-raleway flex items-center">
                <svg className="h-5 w-5 mr-2 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3v8m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
                Latest Industry News
              </h3>
              
              <div className="space-y-4">
                {newsItems.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-golden">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold text-rust bg-rust/10 px-2 py-1 rounded-full mr-2">
                            {news.category}
                          </span>
                          <span className="text-xs text-gray-500">{news.time}</span>
                        </div>
                        <h4 className="text-lg font-medium text-darkblue mb-1 font-raleway hover:text-rust transition-colors duration-300">
                          <a href={news.link}>{news.title}</a>
                        </h4>
                        <p className="text-sm text-gray-600">{news.source}</p>
                      </div>
                      <svg className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-rust hover:bg-golden text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  View All News
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Resources Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-darkblue font-raleway mb-8 text-center">
            Essential Industry Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keyResources.map((resource) => (
              <div key={resource.id} className="bg-cream rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white rounded-lg mr-3">
                    {resource.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-darkblue font-raleway">
                    {resource.title}
                  </h4>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-rust hover:text-golden font-medium text-sm transition-colors duration-300"
                >
                  Visit Resource
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights Call to Action */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-darkblue to-rust rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-golden mb-4 font-raleway">
              Stay Ahead with Market Insights
            </h3>
            <p className="text-cream mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly market analysis, industry trends, and expert insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-golden w-full sm:w-auto sm:min-w-[300px]"
              />
              <button className="bg-golden hover:bg-cream text-darkblue font-semibold py-2 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInfoSection;
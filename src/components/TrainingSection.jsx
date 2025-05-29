import React from 'react';

const TrainingSection = () => {
  const courses = [
    {
      id: 1,
      title: "Petroleum Engineering Fundamentals",
      description: "Comprehensive introduction to petroleum engineering principles and practices",
      duration: "40 hours",
      level: "Beginner",
      category: "Technical",
      icon: (
        <svg className="h-8 w-8 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Oil & Gas Safety Protocols",
      description: "Essential safety training for oil and gas industry professionals",
      duration: "24 hours",
      level: "All Levels",
      category: "Safety",
      icon: (
        <svg className="h-8 w-8 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Data Analytics for Oil & Gas",
      description: "Advanced data analysis techniques for operational optimization",
      duration: "32 hours",
      level: "Intermediate",
      category: "Analytics",
      icon: (
        <svg className="h-8 w-8 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Introduction to Oil & Gas Industry",
      description: "A comprehensive overview of the oil and gas sector, covering upstream, midstream, and downstream operations.",
      readTime: "8 min read",
      category: "Industry Basics",
      link: "#"
    },
    {
      id: 2,
      title: "Understanding Drilling Technologies",
      description: "Explore modern drilling techniques and technologies revolutionizing oil and gas extraction.",
      readTime: "12 min read",
      category: "Technology",
      link: "#"
    },
    {
      id: 3,
      title: "Environmental Considerations in O&G",
      description: "Environmental regulations and sustainable practices in the oil and gas industry.",
      readTime: "10 min read",
      category: "Environment",
      link: "#"
    },
    {
      id: 4,
      title: "Market Dynamics and Pricing",
      description: "Understanding oil and gas market forces, pricing mechanisms, and economic factors.",
      readTime: "15 min read",
      category: "Economics",
      link: "#"
    }
  ];

  return (
    <section id="training" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkblue font-raleway tracking-tight sm:text-4xl">
            Training & Education
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto my-4"></div>
          <p className="mt-4 text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Enhance your expertise with our comprehensive training programs and educational resources
          </p>
        </div>

        {/* Recommended Courses Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-darkblue font-raleway mb-8 text-center">
            Recommended Courses
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cream rounded-lg mr-3">
                    {course.icon}
                  </div>
                  <span className="text-xs font-semibold text-golden bg-golden/10 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-darkblue mb-2 font-raleway">
                  {course.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="bg-rust/10 text-rust px-2 py-1 rounded text-xs">
                    {course.level}
                  </span>
                </div>
                
                <button className="w-full bg-rust hover:bg-golden text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div>
          <h3 className="text-2xl font-semibold text-darkblue font-raleway mb-8 text-center">
            Industry Articles & Resources
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-golden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-darkblue bg-darkblue/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-darkblue mb-2 font-raleway">
                  {article.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {article.description}
                </p>
                
                <a 
                  href={article.link}
                  className="inline-flex items-center text-rust hover:text-golden font-medium text-sm transition-colors duration-300"
                >
                  Read Article
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-darkblue rounded-lg p-8">
            <h3 className="text-2xl font-bold text-golden mb-4 font-raleway">
              Ready to Advance Your Career?
            </h3>
            <p className="text-cream mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have enhanced their skills through our comprehensive training programs.
            </p>
            <button className="bg-golden hover:bg-cream text-darkblue font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
/**
 * Services data for Golden Rock
 * Oil and Gas industry focused services
 */

// Icon components - Use JSX/React approach for SVGs
const icons = {
    database: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 6 3s6-1 6-3V7c0-2-1.5-3-6-3S4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0 2 1.5 3 6 3s6-1 6-3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12c0 2 1.5 3 6 3s6-1 6-3" />
      </svg>
    ),
    
    training: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    
    it: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    
    analytics: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  };
  
  // Service data
  const servicesData = [
    {
      id: 1,
      title: "Oil & Gas Database Management",
      description: "Comprehensive database solutions tailored for the oil and gas industry, ensuring efficient data storage, retrieval, and analysis for operational excellence.",
      iconKey: "database",
      learnMoreLink: "/services/database-management"
    },
    {
      id: 2,
      title: "Industry-Specific Training",
      description: "Specialized training programs for oil and gas professionals, covering technical skills, safety protocols, and regulatory compliance to enhance workforce capabilities.",
      iconKey: "training",
      learnMoreLink: "/services/training"
    },
    {
      id: 3,
      title: "Information Technology Solutions",
      description: "Custom IT infrastructure and software solutions designed specifically for the unique challenges of the oil and gas sector, improving operational efficiency and security.",
      iconKey: "it",
      learnMoreLink: "/services/it-solutions"
    },
    {
      id: 4,
      title: "Data Analytics & Reporting",
      description: "Advanced analytics services to transform your operational data into actionable insights, optimizing production, reducing costs, and identifying new opportunities.",
      iconKey: "analytics",
      learnMoreLink: "/services/analytics"
    }
  ];
  
  // Section content
  const sectionContent = {
    title: "Our Services",
    subtitle: "Specialized solutions for the oil and gas industry to optimize operations, enhance efficiency, and drive sustainable growth."
  };
  
  export { servicesData, icons, sectionContent };
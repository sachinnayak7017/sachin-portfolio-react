
export const skills = {
  'Core Java & Backend': [
    'Java 17', 'OOP', 'Collections', 'Multithreading', 'Spring Boot',
    'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate',
    'REST APIs', 'Microservices', 'Maven'
  ],
  'System Design & Problem Solving': [
    'API Design', 'Concurrency', 'Idempotency', 'Scalability',
    'Distributed Systems', 'Production Troubleshooting', 'DSA'
  ],
  'Databases & Caching': [
    'MySQL', 'PostgreSQL', 'SQL', 'Transactions', 'Redis', 'Query Optimization'
  ],
  'Security': [
    'JWT', 'OAuth 2.0', 'RBAC', 'Encryption & Decryption', 'Spring Security'
  ],
  'Messaging & Integration': [
    'Apache Kafka', 'WebSockets', 'Swagger / OpenAPI'
  ],
  // 'Testing & Tools': [
  //   'Postman', 'REST Assured', 'Selenium', 'Git', 'GitHub'
  // ],
  'DevOps & Cloud': [
    'Linux', 'Docker', 'Kubernetes', 'CI/CD', 'AWS EC2', 'AWS S3'
  ],
  'CS Fundamentals': [
    'DBMS', 'Operating Systems', 'Computer Networks'
  ],
  'Currently Learning': [
    'Generative AI', 'AI APIs', 'AI-powered Application Development'
  ]
};

export const achievements = [
  {
    value: '50+',
    label: 'REST APIs Shipped',
    detail: 'Independently designed and delivered Java/Spring Boot APIs for digital banking.'
  },
  {
    value: '100+',
    label: 'APIs Migrated',
    detail: 'Led migration of Oracle Integration Cloud (OIC) APIs to Java microservices.'
  },
  {
    value: '75–85%',
    label: 'API Latency Reduction',
    detail: 'Measured improvement after migration and query optimization.'
  },
  {
    value: '60–70%',
    label: 'Throughput Increase',
    detail: 'Higher concurrent traffic handling post-migration.'
  }
];

export const experiences = [
  {
    role: 'System Engineer (Assistant Manager)',
    focus: 'Java Backend · Microservices · Digital Banking',
    company: 'Shivalik Small Finance Bank',
    period: 'Nov 2025 – Present',
    highlights: [
      'Designed and shipped 50+ Java/Spring Boot REST APIs; migrated 100+ legacy OIC APIs to Java microservices.',
      'Reduced API latency by 75–85% and increased traffic-handling capacity by 60–70% through migration and query optimization.',
      'Owned end-to-end Card Module delivery — architecture, integration, and deployment with banking partners.',
      'Built and integrated encryption/decryption services for secure partner data exchange.',
      'Diagnosed and resolved production issues across Mobile, Retail, and Corporate Internet Banking.'
    ],
    outcome: 'Delivered API modernization, measurable performance gains, and full ownership of critical banking modules.'
  },
  {
    role: 'Technical Consultant',
    focus: 'Enterprise Applications · Production Support',
    company: 'CorporateServe Solutions',
    period: 'Jan 2025 – Oct 2025',
    highlights: [
      'Delivered Hostel Management and Examination modules end-to-end; shipped 50% of the Result Management module.',
      'Supported a live education ERP system serving 10,000+ student records.',
      'Performed root-cause analysis and resolved production issues on Dynamics 365 Business Central and NAV 2016.'
    ],
    outcome: 'Delivered independent module development and reliable production support for enterprise education workflows.'
  }
];

export const internships = [
  {
    role: 'Java Backend Intern',
    company: 'CodeTechIT',
    period: 'May 2025 – Jul 2025',
    highlights: [
      'Applied Core Java, OOP, and backend development concepts to practical implementation tasks.'
    ]
  },
  {
    role: 'Kotlin Android Development Intern',
    company: 'Anything Infotech',
    period: 'Aug 2024 – Nov 2024',
    highlights: [
      'Built WelcomeSwag, an Android event-service booking app in Kotlin.',
      'Unified catering, DJ, puja, and party-service discovery into a single booking flow.'
    ]
  }
];

export const projects = [
  {
    title: 'Ticket Booking System',
    subtitle: 'Concurrent Seat Reservation Backend',
    category: 'Backend & System Design',
    situation: 'Concurrent booking attempts cause double bookings, inconsistent inventory, and unreliable payment outcomes.',
    task: 'Design a reservation backend that protects seat inventory and manages booking, holds, and payment state transitions.',
    actions: [
      'Built booking APIs with Java, Spring Boot, and Spring Security.',
      'Implemented database-backed seat reservation with temporary holds and expiry.',
      'Handled concurrency and idempotent request processing to prevent double bookings.',
      'Used MySQL, Kafka, and Redis for persistence, messaging, and caching.'
    ],
    result: 'Delivered a reservation workflow focused on consistency, controlled state transitions, and safe failure handling.',
    future: [
      'Add load tests with published throughput and latency benchmarks.',
      'Add monitoring for booking failures, expiry, and payment reconciliation.'
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Kafka', 'Redis', 'Docker', 'Kubernetes'],
    github: 'https://github.com/sachinnayak7017/Ticketing_System',
    video: '',
    images: [],
    published: true
  },
  {
    title: 'Digital Master',
    subtitle: 'Student Management System',
    category: 'Backend Development',
    situation: 'Student administration, fee management, and academic operations need centralized workflows with role-specific access.',
    task: 'Build a secure student-management application with authentication, authorization, and integrated academic workflows.',
    actions: [
      'Implemented JWT-based authentication and OTP verification workflows.',
      'Applied role-based access control (RBAC) for different application roles.',
      'Developed REST APIs for student and administrative workflows.',
      'Integrated payment, email, and real-time communication services.'
    ],
    result: 'Centralized student-management workflows behind secured APIs and role-specific access.',
    future: [
      'Add automated integration tests for critical academic and payment workflows.',
      'Improve audit logging and monitoring for administrative actions.'
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'WebSocket'],
    github: 'https://github.com/sachinnayak7017/SmartAdmissionManagementSystem',
    video: 'project-videos/SUGCAMPUS.mp4',
    images: ['project-images/SUGCompus.png'],
    published: true
  },
  {
    title: 'Easy Find',
    subtitle: 'Lost & Found Platform',
    category: 'Full Stack',
    situation: 'Manual lost-and-found reporting makes it difficult to discover, match, and track missing items.',
    task: 'Build a platform where users can report items, search listings, and receive updates.',
    actions: [
      'Built item reporting and retrieval workflows.',
      'Implemented keyword and category-based search.',
      'Added image upload with server-side validation.',
      'Integrated real-time notifications and email alerts.'
    ],
    result: 'Provided a centralized workflow for reporting and discovering lost-and-found items.',
    future: [
      'Add similarity-based matching between lost and found item descriptions.',
      'Introduce moderation and verification workflows.'
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'WebSocket', 'Bootstrap'],
    github: 'https://github.com/sachinnayak7017/Easy_Find',
    video: 'project-videos/findandlose.mp4',
    images: ['project-images/Easyfind.png'],
    published: true
  },
  {
    title: 'AlgoSearch',
    subtitle: 'DSA Search and Discovery Platform',
    category: 'Backend Development',
    situation: 'Finding relevant DSA problems becomes difficult when content is spread across topics and difficulty levels.',
    task: 'Build a backend search experience that organizes DSA content and helps users discover relevant problems.',
    actions: [
      'Developed the backend with Spring Boot and a relational database.',
      'Implemented search, ranking, and autocomplete-oriented discovery workflows.',
      'Explored caching strategies to improve search response time.'
    ],
    result: 'Created a DSA-focused search platform to organize and discover algorithm practice content.',
    future: [
      'Evaluate search relevance using a repeatable query and ranking test set.',
      'Measure cache hit ratio and search response time under concurrent load.'
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Search', 'Caching'],
    github: 'https://github.com/sachinnayak7017/Algo_search_engine',
    video: '',
    images: [],
    published: true
  },
  {
    title: 'WelcomeSwag',
    subtitle: 'Event Service Booking Android App',
    category: 'Mobile Application',
    situation: 'Planning an event requires coordinating catering, DJ, puja, and party services from different providers.',
    task: 'Create a unified mobile experience for discovering and booking event services.',
    actions: [
      'Developed the Android application using Kotlin.',
      'Organized multiple event-service categories into a single booking experience.',
      'Focused on simplifying service discovery and the booking journey.'
    ],
    result: 'Delivered an event-booking app that unifies multiple event requirements into one place.',
    future: [
      'Add provider availability, booking confirmation, and cancellation workflows.',
      'Introduce service reviews and booking-status notifications.'
    ],
    tags: ['Kotlin', 'Android Development', 'Mobile UI', 'Booking Workflows'],
    github: '',
    video: '',
    images: [],
    published: false
  },
  {
    title: 'Hospital Management System',
    subtitle: 'Healthcare Workflow Application',
    category: 'Application Development',
    situation: 'Healthcare operations require organized workflows for managing day-to-day information.',
    task: 'Develop an application to support hospital-related workflows.',
    actions: [],
    result: 'Project entry prepared; exact modules, implementation details, and technology stack are being confirmed.',
    future: [],
    tags: [],
    github: 'https://github.com/sachinnayak7017/Hospital_management_system',
    video: 'project-videos/Hospital.mp4',
    images: ['project-images/Hospital.png'],
    published: true
  }
];

// Add real public resource URLs and downloadable files here when ready.
export const resources = [];

export const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/sachinnayak7017',
    description: 'Backend projects and source code'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sachin-kumar-860541286/',
    description: 'Professional profile and networking'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/sachin_kumar7017/',
    description: 'Data Structures and Algorithms practice'
  }
];

export const credentials = [
  {
    title: 'First Place — Technical Hackathon',
    issuer: 'Hackathon achievement',
    image: '',
    url: 'https://github.com/sachinnayak7017/Easy_Find'
  },
  {
    title: 'Second Place — Science Day Competition',
    issuer: 'Science Day achievement',
    image: '',
    url: 'https://github.com/sachinnayak7017/SmartAdmissionManagementSystem'
  }
];

export const education = {
  degree: 'B.Tech — Computer Science & Engineering',
  institution: 'Shobhit University, Gangoh, Uttar Pradesh',
  period: 'Sept 2021 – June 2025',
  result: 'CGPA: 7.8 / 10',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Object-Oriented Programming'
  ]
};
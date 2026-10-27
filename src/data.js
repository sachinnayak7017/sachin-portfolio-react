export const skills={
  'Programming Languages':['Java','Python'],
  'Backend Engineering':['Spring Boot','Spring MVC','Spring Security','REST APIs','Microservices','WebSocket','Maven'],
  'Data & Persistence':['Oracle','MySQL','MongoDB','SQL Server','Spring Data JPA','Hibernate'],
  'Security & Testing':['JWT','OAuth 2.0','RBAC','OTP 2FA','JUnit','Rest Assured','Selenium','Postman'],
  'Cloud & DevOps':['AWS EC2','AWS S3','Docker','Apache Kafka','Git','GitHub'],
  'Tools & Frontend':['IntelliJ IDEA','Spring Tool Suite','VS Code','Swagger/OpenAPI','HTML5','CSS3','Bootstrap','Apache POI']
};

export const projects=[
  {title:'Digital Master',subtitle:'Student Management System',category:'Backend',situation:'Admissions, fees, scheduling and academic operations required a secure platform for users with different responsibilities.',task:'Build a multi-role system with protected workflows, clear access boundaries and dependable communication features.',actions:['Implemented JWT and OTP-based authentication','Applied RBAC across three user roles','Developed 20+ secured REST endpoints','Integrated payment, email and real-time chat workflows'],result:'Centralized multiple academic operations behind role-specific and secured workflows.',tags:['Java','Spring Boot','Spring Security','MySQL','WebSocket'],github:'https://github.com/sachinnayak7017',video:'',images:[]},
  {title:'Easy Find',subtitle:'Lost & Found Platform',category:'Full Stack',situation:'Campus lost-and-found reporting depended on manual communication and made matching items difficult.',task:'Create a searchable platform where users can publish items, upload evidence and receive timely updates.',actions:['Built keyword and category search','Added multipart image uploads','Implemented WebSocket notifications','Configured automated email alerts'],result:'Made lost-item discovery easier through searchable listings and automated communication.',tags:['Java','Spring Boot','MySQL','WebSocket','Bootstrap'],github:'https://github.com/sachinnayak7017',video:'',images:[]},
  {title:'FlashSeat',subtitle:'High-Concurrency Ticket Booking',category:'System Design',situation:'Concurrent booking attempts can create double booking, inconsistent prices and duplicate downstream events.',task:'Design a reliable booking workflow that protects seat inventory and keeps asynchronous processing recoverable.',actions:['Designed distributed seat locking','Used idempotent event processing','Applied the outbox pattern','Designed notification and recovery flows'],result:'Created a design focused on preventing double booking and keeping event flows observable and recoverable.',tags:['Java','Spring Boot','Kafka','Redis','Docker'],github:'https://github.com/sachinnayak7017',video:'',images:[]}
];

export const resources=[
  {title:'Latest Resume',type:'Resume',format:'PDF',description:'Current backend engineering resume.',url:'',downloadable:true},
  {title:'Java Backend Notes',type:'Notes',format:'PDF',description:'Java, Spring Boot and REST API revision notes.',url:'',downloadable:true},
  {title:'DSA Question Sheet',type:'DSA',format:'PDF / Sheet',description:'Structured data structures and algorithms practice questions.',url:'',downloadable:true},
  {title:'System Design Notes',type:'System Design',format:'PDF',description:'Scalability, caching, messaging and consistency notes.',url:'',downloadable:true},
  {title:'Python Learning Playlist',type:'Video',format:'YouTube',description:'Python concepts and practical learning videos.',url:'',downloadable:false},
  {title:'Backend Interview Guide',type:'Interview',format:'PDF',description:'Java backend interview questions and preparation checklist.',url:'',downloadable:true}
];

export const profiles=[
  {name:'GitHub',url:'https://github.com/sachinnayak7017'},
  {name:'LinkedIn',url:'https://www.linkedin.com/in/sachin-kumar-860541286/'},
  {name:'LeetCode',url:''},
  {name:'GeeksforGeeks',url:''}
];

export const credentials=[
  {title:'Java Programming & OOP',issuer:'Certificate of Excellence',image:'',url:''},
  {title:'Hackathon',issuer:'First Place',image:'',url:''},
  {title:'Science Day Technical Competition',issuer:'Second Place',image:'',url:''}
];

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award, BookOpen, CheckCircle2, Code2, ExternalLink, Mail,
  MapPin, Menu, Play, Search, ShieldCheck, X
} from 'lucide-react';
import {
  achievements, credentials, education, experiences, internships,
  profiles, projects, resources, skills
} from './data.js';

const navItems = [
  ['About', 'about'],
  ['Impact', 'achievements'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact']
];

const assetUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const shownProjects = projects.filter((project) => project.published !== false);
  const categories = ['All', ...new Set(shownProjects.map((project) => project.category))];
  const filteredProjects = useMemo(() => shownProjects.filter((project) => {
    const searchable = [project.title, project.subtitle, project.situation, ...(project.tags || [])]
      .join(' ').toLowerCase();
    return (
      (category === 'All' || project.category === category) &&
      searchable.includes(query.trim().toLowerCase())
    );
  }), [query, category]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main>
      <header>
        <button className="brand" onClick={() => scrollTo('home')}>
          Sachin Kumar<span>.</span>
        </button>
        <nav>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>
        <a className="btn primary topResume" href="mailto:sachinnayak7017@gmail.com">
          <Mail size={16} /> Contact
        </a>
        <button
          className="hamb"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <div className="mobile">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="hero">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="available">● Open to Java Backend Roles</div>
          <p className="cyan">Hi, I'm Sachin Kumar</p>
          <h1>
            Java Backend Engineer building{' '}
            <em>secure, scalable, production-grade systems.</em>
          </h1>
          <p className="lead">
            I ship production APIs and modernize backend integrations — turning legacy
            workflows into fast, reliable Java microservices. Currently engineering
            digital banking systems at Shivalik Small Finance Bank.
          </p>
          <div className="heroKeywords">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Microservices</span>
            <span>System Design</span>
            <span>DSA</span>
            <span>Kafka</span>
            <span>Redis</span>
          </div>
          <div className="actions">
            <button className="btn primary" onClick={() => scrollTo('projects')}>
              View Engineering Work ↗
            </button>
            <button className="btn" onClick={() => scrollTo('experience')}>
              View Experience
            </button>
          </div>
          <div className="heroStats">
            <div><strong>50+</strong><span>APIs shipped</span></div>
            <div><strong>100+</strong><span>APIs migrated</span></div>
            <div><strong>75–85%</strong><span>Latency cut</span></div>
            <div><strong>60–70%</strong><span>Throughput gain</span></div>
          </div>
        </motion.div>
        <EngineeringSnapshot />
      </section>

      <Section
        id="about"
        eye="Professional Summary"
        title="Backend engineer focused on measurable impact."
      >
        <div className="aboutLayout">
          <div className="aboutCopy">
            <p>
              I'm a Java Backend Engineer with production experience in digital banking
              and enterprise application development. I've independently delivered 50+
              banking APIs, migrated 100+ legacy integrations to Java microservices, and
              owned critical backend modules end-to-end.
            </p>
            <p>
              My focus areas are backend architecture, API performance, security,
              concurrency, and data consistency — grounded in strong CS fundamentals
              (DSA, DBMS, OS, CN) and practical system design.
            </p>
            <p className="learningNote">
              Currently exploring Generative AI and AI-powered application development.
            </p>
          </div>
          <div className="proofPoints">
            <ProofPoint
              title="Modernization"
              text="Migrating legacy integration workloads to maintainable Java microservices."
            />
            <ProofPoint
              title="Performance"
              text="Reducing API response times and improving traffic-handling capacity."
            />
            <ProofPoint
              title="Security"
              text="Implementing encryption/decryption and secure partner integrations."
            />
            <ProofPoint
              title="Ownership"
              text="Taking modules from design through integration, deployment, and production support."
            />
          </div>
        </div>
      </Section>

      <Section
        id="achievements"
        eye="Engineering Impact"
        title="Production outcomes, backed by metrics."
      >
        <div className="achievementGrid">
          {achievements.map((item) => (
            <article className="achievement" key={item.label}>
              <strong>{item.value}</strong>
              <b>{item.label}</b>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="metricNote">
          Metrics reflect reported production outcomes. Detailed before/after
          benchmarks are available on request.
        </p>
      </Section>

      <Section
        id="experience"
        eye="Professional Experience"
        title="Production ownership. Backend modernization. Delivery."
      >
        {experiences.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </Section>

      <Section
        id="internships"
        eye="Early Career"
        title="Internships and practical development experience."
      >
        <div className="internshipGrid">
          {internships.map((item) => (
            <InternshipCard key={item.company} item={item} />
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eye="Technical Capabilities"
        title="Backend engineering, system thinking, and CS fundamentals."
      >
        <div className="grid3">
          {Object.entries(skills).map(([group, values]) => (
            <article className="card" key={group}>
              <h3>{group}</h3>
              <div>
                {values.map((value) => (
                  <span className="tag" key={value}>{value}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="metricNote">
          Generative AI is listed as a current learning area, not as professional
          production experience.
        </p>
      </Section>

      <Section
        id="projects"
        eye="Selected Engineering Work"
        title="Projects explained through problem, implementation, and outcome."
      >
        <ProjectControls
          query={query}
          setQuery={setQuery}
          categories={categories}
          active={category}
          setActive={setCategory}
        />
        <div className="stack">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {filteredProjects.length === 0 && (
            <p className="emptyState">No projects match this search.</p>
          )}
        </div>
      </Section>

      <Section
        id="education"
        eye="Academic Foundation"
        title="Computer science fundamentals."
      >
        <article className="card educationCard">
          <div>
            <p className="cyan">{education.period}</p>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <strong>{education.result}</strong>
          </div>
          <div>
            <b>Relevant coursework</b>
            <div>
              {education.coursework.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </article>
      </Section>

      <Section
        id="profiles"
        eye="Developer Profiles"
        title="Code, learning, and professional network."
      >
        <div className="grid4">
          {profiles.map((profile) => (
            <a
              className="card profileLink"
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              key={profile.name}
            >
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <span className="inlineLink">
                Open profile <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section
        id="credentials"
        eye="Recognition"
        title="Achievements and credentials."
      >
        <div className="grid3">
          {credentials.map((credential) => (
            <CredentialCard key={credential.title} credential={credential} />
          ))}
        </div>
      </Section>

      {resources.length > 0 && (
        <Section
          id="resources"
          eye="Resources"
          title="Technical notes and downloadable material."
        >
          <div className="grid3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </Section>
      )}

      <section id="contact" className="contact">
        <p className="cyan">OPEN TO JAVA BACKEND ENGINEER ROLES</p>
        <h2>Let's build dependable backend systems together.</h2>
        <p>
          Targeting Java Backend Engineer and Backend Developer roles at product-based
          companies — focused on APIs, microservices, system reliability, and
          engineering ownership.
        </p>
        <div className="actions center">
          <a className="btn primary" href="mailto:sachinnayak7017@gmail.com">
            <Mail /> Email
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/sachin-kumar-860541286/"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink /> LinkedIn
          </a>
          <a
            className="btn"
            href="https://github.com/sachinnayak7017"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 /> GitHub
          </a>
        </div>
        <p className="location">
          <MapPin size={16} /> Noida, Uttar Pradesh, India · Open to opportunities
        </p>
      </section>

      <footer>
        © {new Date().getFullYear()} Sachin Kumar · Java Backend Engineering · Built with React
      </footer>
    </main>
  );
}

function EngineeringSnapshot() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="profile"
    >
      <small>ENGINEERING SNAPSHOT</small>
      <h2>From legacy integration to production-ready Java services.</h2>
      <p>
        Backend development, modernization, performance, and security across
        enterprise workflows.
      </p>
      <div className="snapshotList">
        <div>
          <ShieldCheck />
          <span>
            <b>Security ownership</b>
            <small>Encryption, decryption, and partner integrations</small>
          </span>
        </div>
        <div>
          <Code2 />
          <span>
            <b>API engineering</b>
            <small>New API delivery and legacy API migration</small>
          </span>
        </div>
        <div>
          <BookOpen />
          <span>
            <b>System thinking</b>
            <small>DSA, DBMS, OS, CN, and system design</small>
          </span>
        </div>
      </div>
    </motion.aside>
  );
}

function Section({ id, eye, title, children }) {
  return (
    <section id={id} className="section">
      <p className="eye">{eye}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ProofPoint({ title, text }) {
  return (
    <article className="proofPoint">
      <CheckCircle2 />
      <div>
        <b>{title}</b>
        <p>{text}</p>
      </div>
    </article>
  );
}

function ExperienceCard({ item }) {
  return (
    <article className="experience">
      <div className="experienceHeading">
        <h3>{item.role}</h3>
        <p className="cyan">{item.company}</p>
        <small>{item.period}</small>
        <p className="roleFocus">{item.focus}</p>
      </div>
      <div>
        <b className="blockLabel">KEY CONTRIBUTIONS</b>
        <ul className="achievementList">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="resultLine">
          <b>Outcome</b>
          <p>{item.outcome}</p>
        </div>
      </div>
    </article>
  );
}

function InternshipCard({ item }) {
  return (
    <article className="card">
      <small>{item.period}</small>
      <h3>{item.role}</h3>
      <p className="cyan">{item.company}</p>
      <ul className="compactList">
        {item.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {item.note && <p className="metricNote">{item.note}</p>}
    </article>
  );
}

function ProjectControls({ query, setQuery, categories, active, setActive }) {
  return (
    <div className="controls">
      <label>
        <Search />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects or technologies..."
        />
      </label>
      <div>
        {categories.map((value) => (
          <button
            key={value}
            className={active === value ? 'on' : ''}
            onClick={() => setActive(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="projectHead">
        <div>
          <h3>{project.title}</h3>
          <p className="cyan">{project.subtitle}</p>
        </div>
        {project.github && (
          <a
            className="btn"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 /> Source Code
          </a>
        )}
      </div>
      <div className="projectBody">
        <div>
          <StoryBlock label="SITUATION">{project.situation}</StoryBlock>
          <StoryBlock label="TASK">{project.task}</StoryBlock>
          <div className="block">
            <b>ACTION</b>
            <ul className="compactList">
              {project.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
          <StoryBlock label="RESULT">{project.result}</StoryBlock>
          {project.future?.length > 0 && (
            <div className="futureBlock">
              <b>FUTURE ENHANCEMENTS</b>
              <ul className="compactList">
                {project.future.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {(project.images?.length > 0 || project.video) && (
          <div className="projectMedia">
            {project.images?.map((image) => (
              <img
                key={image}
                src={assetUrl(image)}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
            ))}
            {project.video && (
              project.video.startsWith('project-videos/') ? (
                <video controls preload="metadata" src={assetUrl(project.video)} />
              ) : (
                <a
                  className="btn"
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Play size={16} /> Watch project demo
                </a>
              )
            )}
          </div>
        )}
      </div>
      <div className="projectTags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

function StoryBlock({ label, children }) {
  return (
    <div className="block">
      <b>{label}</b>
      <p>{children}</p>
    </div>
  );
}

function CredentialCard({ credential }) {
  return (
    <article className="credential">
      {credential.image ? (
        <img src={assetUrl(credential.image)} alt={credential.title} />
      ) : (
        <div className="certImg">
          <Award />
          <span>Achievement image to be added</span>
        </div>
      )}
      <div>
        <small>Recognition</small>
        <h3>{credential.title}</h3>
        <p>{credential.issuer}</p>
        {credential.url && (
          <a href={credential.url} target="_blank" rel="noreferrer">
            View credential <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

function ResourceCard({ resource }) {
  const href = resource.url.startsWith('http')
    ? resource.url
    : assetUrl(resource.url);
  return (
    <article className="card">
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <a
        className="btn primary"
        href={href}
        target="_blank"
        rel="noreferrer"
        download={resource.downloadable || undefined}
      >
        {resource.downloadable ? 'Download' : 'Open resource'}
      </a>
    </article>
  );
}
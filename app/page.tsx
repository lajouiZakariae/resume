import { getResumeData } from "@/lib";

const { name, role, information, workExperience, technicalSkills, projects } =
  getResumeData();

function removeProtocol(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "");
}

export default function Home() {
  const websiteDomain = removeProtocol(information.website);

  return (
    <div className="resume">
      <header className="resume-header">
        <h1 className="resume-header__name">{name}</h1>
        <div className="resume-header__title">{role}</div>
        <div className="resume-header__contact">
          <span className="resume-header__contact-item">
            <span className="resume-header__contact-icon">✉</span>
            <a href="/cdn-cgi/l/email-protection#4c2d2029346221233e2b2d220c29212d2520622f2321">
              <span
                className="__cf_email__"
                data-cfemail="cdaca1a8b5e3a0a2bfaaaca38da8a0aca4a1e3aea2a0"
              >
                {information.email}
              </span>
            </a>
          </span>
          <span className="resume-header__contact-separator">|</span>
          <span className="resume-header__contact-item">
            <span className="resume-header__contact-icon">☎</span>
            {information.phone}
          </span>
          <span className="resume-header__contact-separator">|</span>
          <span className="resume-header__contact-item">
            <span className="resume-header__contact-icon">📍</span>
            {information.location}
          </span>
          <span className="resume-header__contact-separator">|</span>
          <span className="resume-header__contact-item">
            <span className="resume-header__contact-icon">in</span>
            <a href={information.linkedIn.link}>
              /{information.linkedIn.username}
            </a>
          </span>
          <span className="resume-header__contact-separator">|</span>
          <span className="resume-header__contact-item">
            <span className="resume-header__contact-icon">⌘</span>
            <a href={information.github.link}>{information.github.username}</a>
          </span>
          <span className="resume-header__contact-separator">|</span>
          <span className="resume-header__contact-item">
            <span className="resume-header__contact-icon">🌐</span>
            <a href={information.website}>{websiteDomain}</a>
          </span>
        </div>
      </header>

      <section className="resume-section">
        <h2 className="resume-section__heading">Professional Experience</h2>
        <div className="resume-section__content">
          {workExperience.map((experience) => (
            <article
              key={experience.company}
              className="resume-experience__item"
            >
              <div className="resume-experience__header">
                <div>
                  <div className="resume-experience__title">
                    {experience.title}
                  </div>
                  <div className="resume-experience__company">
                    {experience.company} | {experience.location}
                  </div>
                </div>
                <div className="resume-experience__date">
                  {experience.startDate} - {experience.endDate}
                </div>
              </div>
              <div className="resume-experience__description">
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-section--compact">
        <h2 className="resume-section__heading">Technical Skills</h2>
        <div className="resume-section__content">
          {technicalSkills.map((skill) => (
            <div key={skill.category} className="resume-skills__category">
              <div className="resume-skills__category-name">
                {skill.category}:
              </div>
              <div className="resume-skills__list">
                {skill.skills.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section resume-section--compact">
        <h2 className="resume-section__heading">Notable Projects</h2>
        <div className="resume-section__content">
          {projects.map((project) => (
            <article key={project.name} className="resume-project">
              <div className="resume-project__header">
                <div className="resume-project__name">{project.name}</div>
                <a href={project.link} className="resume-project__link">
                  {removeProtocol(project.link)}
                </a>
              </div>
              <div className="resume-project__tech">
                Tech Stack: {project.techStack}
              </div>
              <div className="resume-project__description">
                {project.description}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-section--compact">
        <h2 className="resume-section__heading">Education</h2>
        <div className="resume-section__content">
          <article className="resume-education__item">
            <div className="resume-education__header">
              <div>
                <div className="resume-education__degree">
                  Bachelor of Science in Computer Science
                </div>
                <div className="resume-education__institution">
                  University of Washington
                </div>
              </div>
              <div className="resume-education__date">2019</div>
            </div>
            <div className="resume-education__details">
              GPA: 3.8/4.0 | Relevant Coursework: Data Structures, Web
              Development, Database Systems, Software Engineering
            </div>
          </article>

          <article className="resume-education__item">
            <div className="resume-education__header">
              <div>
                <div className="resume-education__degree">
                  AWS Certified Solutions Architect - Associate
                </div>
                <div className="resume-education__institution">
                  Amazon Web Services
                </div>
              </div>
              <div className="resume-education__date">2023</div>
            </div>
          </article>
        </div>
      </section>

      <section className="resume-section resume-section--compact">
        <h2 className="resume-section__heading">Languages</h2>
        <div className="resume-section__content">
          <div className="resume-languages__list">
            <div className="resume-languages__item">
              <div className="resume-languages__dots">
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
              </div>
              <span className="resume-languages__name">Arabic</span>
              <span className="resume-languages__level">Native</span>
            </div>

            <div className="resume-languages__item">
              <div className="resume-languages__dots">
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot"></span>
              </div>
              <span className="resume-languages__name">English</span>
              <span className="resume-languages__level">Professional</span>
            </div>

            <div className="resume-languages__item">
              <div className="resume-languages__dots">
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot resume-languages__dot--filled"></span>
                <span className="resume-languages__dot"></span>
                <span className="resume-languages__dot"></span>
              </div>
              <span className="resume-languages__name">French</span>
              <span className="resume-languages__level">Conversational</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

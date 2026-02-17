import { getResumeData, removeProtocol } from "@/lib";

const { projects } = getResumeData();

export default function Projects() {
  return (
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
  );
}

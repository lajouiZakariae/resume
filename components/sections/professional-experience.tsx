import { getResumeData } from "@/lib";

const { workExperience } = getResumeData();

export default function ProfessionalExperience() {
  return (
    <section className="resume-section">
      <h2 className="resume-section__heading">Professional Experience</h2>
      <div className="resume-section__content">
        {workExperience.map((experience) => (
          <article key={experience.company} className="resume-experience__item">
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
  );
}

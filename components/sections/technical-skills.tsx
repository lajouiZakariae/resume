import { getResumeData } from "@/lib";

const { technicalSkills } = getResumeData();

export default function TechnicalSkills() {
  return (
    <section className="resume-section resume-section--compact">
      <h2 className="resume-section__heading">Technical Skills</h2>
      <div className="resume-section__content">
        {technicalSkills.map((skill) => (
          <div key={skill.category} className="resume-skills__category">
            <div className="resume-skills__category-name">
              {skill.category}:
            </div>
            <div className="resume-skills__list">{skill.skills.join(", ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

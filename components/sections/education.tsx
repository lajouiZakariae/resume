import { getResumeData } from "@/lib";

const { education } = getResumeData();

export default function Education() {
  return (
    <section className="resume-section resume-section--compact">
      <h2 className="resume-section__heading">Education</h2>
      <div className="resume-section__content">
        {education.map((item, index) => (
          <article key={index} className="resume-education__item">
            <div className="resume-education__header">
              <div>
                <div className="resume-education__degree">{item.degree}</div>
                <div className="resume-education__institution">
                  {item.institution}
                </div>
              </div>
              <div className="resume-education__date">{item.date}</div>
            </div>
            {item.details && (
              <div className="resume-education__details">{item.details}</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

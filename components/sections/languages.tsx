import { getResumeData } from "@/lib";

const { languages } = getResumeData();

export default function Languages() {
  return (
    <section className="resume-section resume-section--compact">
      <h2 className="resume-section__heading">Languages</h2>
      <div className="resume-section__content">
        <div className="resume-languages__list">
          {languages.map((language) => (
            <div key={language.language} className="resume-languages__item">
              <div className="resume-languages__dots">
                {[...Array(language.level)].map((_, index) => (
                  <span
                    key={index}
                    className="resume-languages__dot resume-languages__dot--filled"
                  ></span>
                ))}
                {[...Array(5 - language.level)].map((_, index) => (
                  <span key={index} className="resume-languages__dot"></span>
                ))}
              </div>
              <span className="resume-languages__name">
                {language.language}
              </span>
              <span className="resume-languages__level">
                {language.proficiency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

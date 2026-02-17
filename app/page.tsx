import Education from "@/components/sections/education";
import Header from "@/components/sections/header";
import Languages from "@/components/sections/languages";
import ProfessionalExperience from "@/components/sections/professional-experience";
import Projects from "@/components/sections/projects";
import TechnicalSkills from "@/components/sections/technical-skills";

export default function Home() {
  return (
    <div className="resume">
      <Header />

      <ProfessionalExperience />

      <TechnicalSkills />

      <Projects />

      <Education />

      <Languages />
    </div>
  );
}

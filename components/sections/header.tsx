import { getResumeData, removeProtocol } from "@/lib";

const { name, role, information } = getResumeData();

export default function Header() {
  const websiteDomain = removeProtocol(information.website);

  return (
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
  );
}

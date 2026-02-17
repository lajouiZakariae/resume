import { getResumeData } from "@/lib";

const { name, role, information } = getResumeData();

export default function Home() {
  const websiteDomain = information.website.replace(/(^\w+:|^)\/\//, "");

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
          <article className="resume-experience__item">
            <div className="resume-experience__header">
              <div>
                <div className="resume-experience__title">
                  Senior Fullstack Developer
                </div>
                <div className="resume-experience__company">
                  TechFlow Solutions | Seattle, WA
                </div>
              </div>
              <div className="resume-experience__date">
                January 2023 - Present
              </div>
            </div>
            <div className="resume-experience__description">
              <ul>
                <li>
                  Architected and deployed 12+ Laravel APIs and Next.js
                  applications, supporting 3M+ monthly active users with 99.9%
                  uptime
                </li>
                <li>
                  Led migration from legacy PHP monolith to modern Laravel
                  microservices with Next.js frontend, reducing page load time
                  by 45% and improving SEO performance by 60%
                </li>
                <li>
                  Built real-time notification system using Laravel
                  Broadcasting, Redis, and WebSockets, processing 500K+ events
                  per hour with sub-100ms latency
                </li>
                <li>
                  Mentored team of 5 junior developers, establishing Laravel
                  best practices and improving test coverage from 45% to 92%
                  using PHPUnit and Pest
                </li>
                <li>
                  Implemented comprehensive CI/CD pipeline using GitHub Actions
                  and Laravel Forge, reducing deployment time from 2 hours to 15
                  minutes
                </li>
              </ul>
            </div>
          </article>

          <article className="resume-experience__item">
            <div className="resume-experience__header">
              <div>
                <div className="resume-experience__title">
                  Fullstack Developer
                </div>
                <div className="resume-experience__company">
                  DataVision Inc. | Remote
                </div>
              </div>
              <div className="resume-experience__date">
                March 2021 - December 2022
              </div>
            </div>
            <div className="resume-experience__description">
              <ul>
                <li>
                  Developed customer-facing analytics dashboard using Next.js,
                  React, and Laravel API, serving 150K+ users across 40
                  countries
                </li>
                <li>
                  Optimized MySQL database queries and implemented Laravel Query
                  caching strategies, reducing API response time by 70%
                </li>
                <li>
                  Built automated testing framework using PHPUnit, Pest, and
                  Cypress, achieving 85% code coverage and reducing production
                  bugs by 40%
                </li>
                <li>
                  Collaborated with UX team to redesign core application
                  interface using Next.js Server Components, increasing user
                  engagement metrics by 35%
                </li>
                <li>
                  Integrated third-party payment processing using Laravel
                  Cashier (Stripe) and PayPal APIs, handling $2M+ in monthly
                  transactions
                </li>
              </ul>
            </div>
          </article>

          <article className="resume-experience__item">
            <div className="resume-experience__header">
              <div>
                <div className="resume-experience__title">
                  Junior Web Developer
                </div>
                <div className="resume-experience__company">
                  StartupHub | San Francisco, CA
                </div>
              </div>
              <div className="resume-experience__date">
                June 2019 - February 2021
              </div>
            </div>
            <div className="resume-experience__description">
              <ul>
                <li>
                  Developed and maintained responsive web applications using
                  React and Laravel for 15+ client projects
                </li>
                <li>
                  Implemented RESTful APIs using Laravel API Resources and
                  Eloquent ORM, supporting mobile and web applications with 50K+
                  daily requests
                </li>
                <li>
                  Collaborated with cross-functional teams using Agile
                  methodologies, participating in daily standups and sprint
                  planning
                </li>
                <li>
                  Created reusable React component library with Tailwind CSS,
                  reducing development time for new features by 30%
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="resume-section resume-section--compact">
        <h2 className="resume-section__heading">Technical Skills</h2>
        <div className="resume-section__content">
          <div className="resume-skills__category">
            <div className="resume-skills__category-name">Frontend:</div>
            <div className="resume-skills__list">
              React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
              Tailwind CSS, Shadcn UI, Redux, Zustand, React Query, Server
              Components, Responsive Design
            </div>
          </div>

          <div className="resume-skills__category">
            <div className="resume-skills__category-name">Backend:</div>
            <div className="resume-skills__list">
              Laravel, PHP, Eloquent ORM, RESTful APIs, Laravel Sanctum, Laravel
              Passport, API Resources, Queue Management, Event Broadcasting,
              WebSockets
            </div>
          </div>

          <div className="resume-skills__category">
            <div className="resume-skills__category-name">Database:</div>
            <div className="resume-skills__list">
              MySQL, PostgreSQL, Redis, Database Design, Eloquent Relationships,
              Query Optimization, Migrations, Seeders
            </div>
          </div>

          <div className="resume-skills__category">
            <div className="resume-skills__category-name">DevOps & Tools:</div>
            <div className="resume-skills__list">
              Docker, Laravel Forge, Laravel Vapor, Vercel, AWS (S3,
              CloudFront), GitHub Actions, CI/CD, Git, Composer, NPM, Linux,
              Nginx
            </div>
          </div>

          <div className="resume-skills__category">
            <div className="resume-skills__category-name">
              Testing & Quality:
            </div>
            <div className="resume-skills__list">
              PHPUnit, Pest, Jest, React Testing Library, Cypress, Feature
              Testing, Unit Testing, API Testing, TDD
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section resume-section--compact">
        <h2 className="resume-section__heading">Notable Projects</h2>
        <div className="resume-section__content">
          <article className="resume-project">
            <div className="resume-project__header">
              <div className="resume-project__name">
                DevCollab - Real-time Collaboration Platform
              </div>
              <a
                href="https://github.com/alexmorgan/devcollab"
                className="resume-project__link"
              >
                github.com/alexmorgan/devcollab
              </a>
            </div>
            <div className="resume-project__tech">
              Tech Stack: Next.js, TypeScript, Laravel, Laravel Broadcasting,
              Redis, MySQL, Docker
            </div>
            <div className="resume-project__description">
              Built a real-time collaborative coding platform with live cursor
              tracking, video chat, and code execution. Supports 10K+ concurrent
              connections with optimized Laravel WebSocket architecture.
              Featured on Product Hunt with 500+ upvotes.
            </div>
          </article>

          <article className="resume-project">
            <div className="resume-project__header">
              <div className="resume-project__name">
                OpenAPI Monitor - API Health Dashboard
              </div>
              <a
                href="https://github.com/alexmorgan/api-monitor"
                className="resume-project__link"
              >
                github.com/alexmorgan/api-monitor
              </a>
            </div>
            <div className="resume-project__tech">
              Tech Stack: React, Laravel, MySQL, Redis, Laravel Queue, AWS
              Lambda, Vercel
            </div>
            <div className="resume-project__description">
              Developed an open-source API monitoring solution with automated
              health checks, alert notifications, and performance analytics
              using Laravel Queue system. Used by 200+ companies to monitor
              5,000+ endpoints.
            </div>
          </article>
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

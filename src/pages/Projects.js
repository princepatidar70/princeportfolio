import React from "react";

const Projects = () => {
  return (
    <div  id="projects" className="project-main">
      <h1 className="project-head">My Projects</h1>

      <h2 class="section-subtitle">
        Here are some of the live projects I’ve worked on, showcasing my
        expertise in front-end and full-stack development.
      </h2>

      <section id="projects" class="projects-section">
        <div class="projects-grid">
          <div class="project-card">
            <img
              src="https://www.ust.com/content/dam/ust/images/logos/ust-plutora.jpg?auto=webp,smallest&quality=80"
              alt="Plutora Project Screenshot"
              class="project-image"
            />
            <div class="project-content">
              <h3 class="project-title">
                Plutora - Enterprise Release Management Solution
              </h3>
              <p class="project-description">
                Plutora provides a SaaS platform to manage releases, test
                environments, and DevOps processes for enterprises.
              </p>
              <ul class="project-contributions">
                <li>
                  Developed scalable UI components with React.js and Redux.
                </li>
                <li>Integrated REST APIs for real-time updates.</li>
                <li>Optimized performance, reducing page load times by 20%.</li>
              </ul>
              <div class="project-tech-stack">
                <span class="tech-badge">JavaScript</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Jquery</span>
                <span class="tech-badge">Bitbucket</span>
                <span class="tech-badge">Swagger</span>
              </div>
              <div class="project-links">
                <a
                  href="https://www.plutora.com"
                  target="_blank"
                  class="live-link"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>

          <div class="project-card">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQFHoIUi0OsUmg/company-logo_200_200/company-logo_200_200/0/1694601440954/thebrunoeffect_logo?e=2147483647&v=beta&t=zO6CLY-0l2er-aybhx84k6oL5dqE2njW0WVDukdDZi4"
              alt="The Bruno Effect Project Screenshot"
              class="project-image"
            />
            <div class="project-content">
              <h3 class="project-title">
                The Bruno Effect – Luxury Furniture Marketplace
              </h3>
              <p class="project-description">
                An e-commerce platform connecting luxury furniture buyers with
                top global suppliers.
              </p>
              <ul class="project-contributions">
                <li>
                  Designed and developed interactive product pages using
                  Next.js.
                </li>
                <li>
                  Implemented dynamic search and filtering functionalities.
                </li>
                <li>Ensured pixel-perfect UI consistency with designers.</li>
              </ul>
              <div class="project-tech-stack">
                <span class="tech-badge">React.js</span>
                <span class="tech-badge">Next.js</span>
                <span class="tech-badge">Tailwind css</span>
                <span class="tech-badge">TypeScript</span>
              </div>
              <div class="project-links">
                <a
                  href="https://www.thebrunoeffect.com"
                  target="_blank"
                  class="live-link"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>

          <div class="project-card">
            <img
              src="https://static.wixstatic.com/media/df476b_19cb424065cf44869a05d046de90a0ba~mv2.jpg"
              alt="Silkhaus Project Screenshot"
              class="project-image"
            />
            <div class="project-content">
              <h3 class="project-title">Silkhaus – Vacation Rental Platform</h3>
              <p class="project-description">
                A platform enabling property owners to list, manage, and
                monetize their vacation rentals.
              </p>
              <ul class="project-contributions">
                <li>
                  Developed custom booking forms and dashboards for property
                  owners.
                </li>
                <li>Integrated payment gateway using Stripe API.</li>
                <li>Conducted cross-browser compatibility testing.</li>
              </ul>
              <div class="project-tech-stack">
                <span class="tech-badge">React.js</span>
                <span class="tech-badge">Next.js</span>
                <span class="tech-badge">Tailwind css</span>
                <span class="tech-badge">Node.js</span>
                <span class="tech-badge">MongoDB</span>
              </div>
              <div class="project-links">
                <a
                  href="https://www.silkhaus.com"
                  target="_blank"
                  class="live-link"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

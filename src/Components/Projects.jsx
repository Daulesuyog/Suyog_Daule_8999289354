import { useApp } from "../Context/AppContext.jsx";

export default function Project() {
  const { projects } = useApp();

  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((pro) => (
            <article key={pro.title} className="project-card">
              <h3>{pro.title}</h3>
              <p className="meta">{pro.type}</p>
              <p>{pro.description}</p>
              <div className="chips">
                {pro.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="card-links">
                {pro.live && (
                  <a href={pro.live} target="_blank" rel="noreferrer">Live Demo
                  </a>
                )}
                <a href={pro.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </article>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

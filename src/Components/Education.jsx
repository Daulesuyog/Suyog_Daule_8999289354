import { useApp } from "../Context/AppContext";

function Education () {
    const {education, certifications, publication} = useApp();

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                {education.map((edu) => (
                    <article key={edu.school} className="timeline-item">
                        <h3>{edu.degree}</h3>
                        <p>{edu.school}</p>
                        <p className="meta">{edu.period} | {edu.score}</p>
                    </article>
                ))};

                <h2 className="section-title sub">Certifications</h2>
                <ul className="link-list">
                    {certifications.map((cer) => (
                        <li key={cer.name}>
                            <a href={cer.link} target="_blank" rel="noreferrer">{cer.name}</a>
                        </li>
                    ))}
                </ul>

                <h2 className="section-title sub">Publication</h2>
               {publication && (
                    <p>
                        <a
                            href={publication.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {publication.name}
                        </a>
                    </p>
                )}
            </div>
        </section>
    )
}
export default Education;
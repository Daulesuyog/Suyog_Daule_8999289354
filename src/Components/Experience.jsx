import {useApp} from "../Context/AppContext.jsx"

function Experience () {
    const {experience} = useApp();

    return (
        <section id="experience"className="section">  
            <div className="container">
                <h2 className="section-title">Experience</h2>
                {experience.map((exp) => (
                    <article key={exp.company} className="timeline-item">
                        <h3>{exp.role} at {exp.company}</h3>
                        <p className="meta">{exp.period}</p>
                        <ul>
                            {exp.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Experience;
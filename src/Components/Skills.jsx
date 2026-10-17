import { skills } from "../App_State";
import { useApp } from "../Context/AppContext";

export default function Skills() {
    const {Skills} = useApp();

    return(
        <section id="skills" className="section alt">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((group) => (
                        <div key={group.group} className="skill-group">
                            <h3>{group.group}</h3>
                            <div className="chips">
                                {group.items.map((item) => (
                                    <span key={item} className="chip">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import {useApp} from "../Context/AppContext.jsx";

function About () {
    const {profile} = useApp();
    const details = [
       ["Full name", profile.name],
       ["Location", profile.location],
       ["Email", profile.email],
       ["phone", profile.phone],
    ];

    return (
       <section id="about" className="section">
        <div className="container">
            <h2 className="section-title">About me</h2>
            <div className="about-grid">
                <div>
                    {profile.about.map((text,i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
                <dl className="details">
                    {details.map(( [label,value]) => (
                        <div key={label}>
 <dt>{label}</dt>
 <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
       </section>
    )
};

export default About;
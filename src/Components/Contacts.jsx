import { useApp } from "../Context/AppContext";

export default function Contact() {
  const { profile } = useApp();

  return (
    <section id="contact" className="section alt">
      <div className="container contact">
        <h2 className="section-title">Contact</h2>
        <p className="lead">
          I’m an IT graduate passionate about software development,
          problem-solving, and software quality assurance. I’m open to Full
          Stack Developer, Software Engineer, and QA opportunities where I can
          apply my skills, learn, and grow.
        </p>
        <div className="btn-row">
            <a href={`mailto:${profile.email}`} className="btn">Email Me</a>
<a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn btn-outline">{profile.phone}</a>
     <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>

        </div>
      </div>
    </section>
  );
}

// import { useApp } from "../Context/AppContext.jsx";

// export default function Hero() {
//   const { profile } = useApp();

//   return (
//     <section id="top" className="hero">
//       <div className="container hero-grid">
//         <div>
//           <p className="hello">Hi, I am</p>
//           <h1>{profile.name}</h1>
//           <h2>{profile.role}</h2>
//           <p className="lead">{profile.tagline}</p>

//           <div className="btn-row">
//             <a className="btn" href={profile.resume} download>
//               Download Resume
//             </a>
//             <a
//               className="btn btn-outline"
//               href={profile.linkedin}
//               target="_blank"
//               rel="noreferrer"
//             >
//               LinkedIn
//             </a>
//             <a
//               className="btn btn-outline"
//               href={profile.github}
//               target="_blank"
//               rel="noreferrer"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//         <img className="profile-photo" src={profile.photo} alt={profile.name} />

//         <pre className="code-card" aria-hidden="true">
//           {`
// const suyog = {
//   role: "Aspiring Software Professional",
//   interestedIn: [
//     "Software Development",
//     "Software Testing & QA",
//     "Technical Support",
//     "IT & Software Engineering"
//   ],
//   skills: [
//     "React.js",
//     "JavaScript",
//     "Node.js",
//     "Express.js",
//     "PostgreSQL",
//     "MongoDB",
//     "REST APIs",
//     "Java",
//     "Python"
//   ],
//   education: "B.E. in Information Technology",
//   cgpa: 8.54,
//   openToWork: true,
// };
// `}
//         </pre>
//       </div>
//     </section>
//   );
// }

import { useApp } from "../Context/AppContext";

export default function Hero() {
  const { profile } = useApp();

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
       
        <div>
          <p className="hello">Hi, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="lead">{profile.tagline}</p>

          <div className="btn-row">
            <a className="btn" href={profile.resume} download>Download Resume</a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <pre className="code-card" aria-hidden="true">
{`const suyog = {
  role: "Aspiring IT Professional",
  interests: ["Development", ""Data Analysis", Business Analysis],
  openToWork: true,
};`}
          </pre>
        </div>
        <img className="profile-photo" src={profile.photo} alt={profile.name} />
      </div>
    </section>
  );
}
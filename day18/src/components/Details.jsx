function Details(props) {
 const skills = ["HTML", "CSS", "JavaScript", "React"];
 const webSkills = skills.filter((skill) => skill !== "CSS");
    return (
    <div>
      <h2>My Details</h2>
      <p>My name is Fayroz</p>
      <p>I am learning {props.subject}</p>
    <h3>My Skills</h3>

<ul>
  {skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
<h3>Skills Without CSS</h3>

<ul>
  {webSkills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
    </div>

  );
}

export default Details;
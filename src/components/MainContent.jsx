export function Main() {
  return (
    <section>
      <h1>Javier Figueroa</h1>
      <h2>Frontend Developer</h2>
      <p className="section-p">javiernfigueroa@gmail.com</p>
      <div className="botons">
        <button className="email-btn">Email</button>
        <a href="https://www.linkedin.com/in/javier-nicolas-figueroa-aguayo-52157085/" target="_blank"><button className="linkedin-btn">Linkedin</button></a>
      </div>

      <div className="info">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3 className="info-interest">Interest</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic
        </p>
      </div>
    </section>
  );
}

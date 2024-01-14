import "./About.css"

export default function About() {
  const contactLinks = [
    {
      title: "Email",
      src: "mailto:suhaas.teja@gmail.com",
      image: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
    },
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/suhaas-teja/",
      image: "https://cdn-icons-png.flaticon.com/256/174/174857.png"

    },
    {
      title: "Github",
      src: "https://github.com/suhaasteja",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    }
  ]
  return (
    <div className='about-container flex'>
      <div className="circles-container flex">
        <div className="circles">
          <div id="circle-1" className="circle"></div>
          <div id="circle-2" className="circle"></div>
        </div>
      </div>
      <div className="about-info">
        <div id="name">Suhaas Teja Vijjagiri </div>
        <div className="sub">About me</div>
        <div className="description">
          I'm a Graduate Student at
          San Jose State University
          Computer Engineering Department.</div>
        <div className='contact-links'>
          {contactLinks.map((contact, index) => (
            <a href={contact.src} target="__blank"  className="contact-container" key={index}>
              <img src={contact.image} alt={contact.title} />
              {/* <div className="title">{contact.title}</div> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

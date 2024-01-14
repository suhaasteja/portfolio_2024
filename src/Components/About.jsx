import "./About.css"

export default function About() {
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
              <div className="description">I'm a Graduate Student at
                  San Jose State University
                  Computer Engineering Department.</div>
        </div>
    </div>
  )
}

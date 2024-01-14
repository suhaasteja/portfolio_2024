import React from 'react'
import "./Projects.css"

export default function Projects() {
    const content = [
        {
            title: "Amazon Clone",
            sub: "ReactJS, HTML, CSS, Netlify",
            description: [
                "React Amazon clone, dynamic listings.",
                "Responsive design, RESTful API.",
                "Project Link: https://amazon-clone333.netlify.app/",
            ],
                            "projectLink": "https://amazon-clone333.netlify.app/",
            image: "src/assets/amazon.png"
        },
        {
            title: "Wordle Clone",
            sub: "ReactJS, HTML, CSS, Netlify",
            description: [
                "Clone of popular NewYork Times game “Wordle”",
                "Responsive design",
                "Project Link: https://wordle-clone333.netlify.app/",
            ],
                            "projectLink": "https://wordle-clone333.netlify.app/",
            image: "src/assets/wordle.png"
        },
        {
            title: "Tic-Tac-Toe",
            sub: "ReactJS, HTML, CSS, Netlify",
            description: [
                "Web based Tic - Tac - Toe",
                "Project Link: https://tictactoe333.netlify.app/",
            ],
                            "projectLink": "https://tictactoe333.netlify.app/",
            image: "src/assets/tic_tac_toe.png"
        }
    ];
    return (
        <div className='projects-container'>
            {
                content.map((obj, i) => {
                    const { title, sub, description, image, projectLink } = obj;
                    return (
                        <div className="project-container flex" key={i} style={{ '--container-index': i }}>
                            <div className="left flex-col">
                                <div className="title">{title}</div>
                                <div className="sub">{sub}</div>
                                <ul className="description">{description.map((item, i) => {
                                    return (
                                        <li key={i} className='item' style={{ '--item-index': i }}>{item}</li>
                                    )
                                })}</ul>
                            </div>
                            <div className="right flex">
                                <a className="work-img-container" href={projectLink} target='__blank'>
                                    <img src={image} alt={title} />
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

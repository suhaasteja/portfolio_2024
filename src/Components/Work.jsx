import React from 'react'
import "./Work.css"

export default function Work() {
    const content = [
        {
            heading: "Education",
            info: [
                {
                    date: "Aug, 2023 - Present",
                    title: "San Jose State University",
                    sub: "Computer Engineering graduate student",
                    description: [
                        "Data Structures & Algorithms in C++",
                        "Machine learning",
                        "Computer Architecture ",
                    ]
                }
            ]
        },
        {
            heading: "Experience",
            info: [
                {
                    date: "Mar, 2022 - May, 2023",
                    title: "ZestIOT",
                    sub: "Software Engineer",
                    description: [
                        "10 + SPAs developed, 85 % digitization.",
                        "Google Maps integration, 30 % efficiency.",
                        "Echarts Analytics dashboards, 15 % decision - making.",
                        "Figma UI / UX, 20 % time saved.",
                        "15 + RESTful API integrations.",
                        "AWS Jenkins deployments.",
                    ]
                },
                {
                    date: "Sep, 2021 - Dec, 2021",
                    title: "Intelloger",
                    sub: "Intern",
                    description: [
                        "HTML / CSS / JS skills, practical work.",
                        "Daily workshops, hands - on tasks.",
                    ]
                }
            ]
        },

    ]
    return <div className="work-container">
        {
            content.map((item, i) => {
                const { heading, info } = item;
                return <div className="work-section" key={i}>
                    <div className="heading flex">{heading}</div>
                    <div className="all-info-container">
                        {
                            info.map((el, j) => {
                                const { date,
                                    title,
                                    sub,
                                    description } = el;
                                return <div className='info-container' key={j}>
                                    <div className="duration">{date}</div>
                                    <div className="information">
                                        <div className="title">{title}</div>
                                        <div className="sub">{sub}</div>
                                        <ul className="description">{
                                            description.map((point, k) => {
                                                return <li key={k}>{point}</li>
                                            })
                                        }</ul>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>
}

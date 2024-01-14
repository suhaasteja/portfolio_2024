import React from 'react'
import './Skills.css'

export default function Skills() {
  const content = [
    {
      "title": "JavaScript",
      "image": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },
    {
      "title": "TypeScript",
      "image": "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
    },
    {
      "title": "HTML/CSS",
      "image": "https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
    },
    {
      "title": "Java",
      "image": "https://cdn-icons-png.flaticon.com/512/226/226777.png"
    },
    {
      "title": "Python",
      "image": "https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
    },
    {
      "title": "C++",
      "image": "https://cdn-icons-png.flaticon.com/128/6132/6132222.png"
    },
    {
      "title": "React",
      "image": "https://cdn-icons-png.flaticon.com/128/12631/12631028.png"
    },
    {
      "title": "Angular",
      "image": "https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png"
    },
    {
      "title": "Node.js",
      "image": "https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png"
    },
    // {
    //   "title": "Echarts",
    //   "image": ""
    // },
    // {
    //   "title": "Material-UI",
    //   "image": ""
    // },
    {
      "title": "Git",
      "image": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
    },
    {
      "title": "Docker",
      "image": "https://static-00.iconduck.com/assets.00/docker-icon-icon-2048x1479-cres2he9.png"
    },
    {
      "title": "Jenkins",
      "image": "https://cdn.icon-icons.com/icons2/2699/PNG/512/jenkins_logo_icon_170552.png"
    },
    {
      "title": "AWS",
      "image": "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
    },
    // {
    //   "title": "Google Cloud Platform",
    //   "image": ""
    // },
    {
      "title": "Bitbucket",
      "image": "https://static-00.iconduck.com/assets.00/bitbucket-icon-512x460-aj2zdfts.png"
    },
    {
      "title": "VS Code",
      "image": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
    },
    {
      "title": "Figma",
      "image": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
    },
    // {
    //   "title": "Responsive Web Design",
    //   "image": ""
    // },
    // {
    //   "title": "Agile Methodologies",
    //   "image": ""
    // },
    {
      "title": "JIRA",
      "image": "https://static-00.iconduck.com/assets.00/jira-icon-2048x2048-nufjgz6n.png"
    },
    // {
    //   "title": "RESTful API Integration",
    //   "image": ""
    // },
    // {
    //   "title": "Real-Time Systems",
    //   "image": ""
    // },
    // {
    //   "title": "Google Maps API",
    //   "image": ""
    // },
    // {
    //   "title": "Web Performance Optimization",
    //   "image": ""
    // }
  ]

  return (
    <div className='skills-container'>
      {
        content.map((obj, i) => {
          const { title, image } = obj;

          return (
            <figure key={i} className='skill-box '>
              <img src={image} alt={title} className='image' />
              <figcaption className='img-caption'>{title}</figcaption>
            </figure>)
        })
      }
    </div>
  )
}

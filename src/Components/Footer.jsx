import "./Footer.css"

export default function Footer() {

    const content = [
        {
            title: "Email",
            val: "suhaas[dot]teja[at]gmail.com"
        },
        {
            title: "Github",
            val: "https://github.com/suhaasteja"
        },
        {
            title: "LinkedIn",
            val: "https://www.linkedin.com/in/suhaas-teja/"
        },
        {
            title: "",
            val: "© 2024 by Suhaas"
        }
    ]
    return (
        <div className="footer-container flex">
            {
                content.map((obj, i) => {
                    const { title, val } = obj;
                    return (
                        <div className={`flex-col footer-vals ${title ? "" : "trademark"}`} key={i}>
                            <div className="title">{title}</div>
                            <span className="link">{val}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div>
                    <h3 className="">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((i, ind) => (
                            <li key={ind}>
                                <a href={i.href}>{i.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="">
                        Platform
                    </h3>
                    <ul className="space-y-2">
                        {platformLinks.map((i, ind) => (
                            <li key={ind}>
                                <a href={i.href}>{i.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="">
                        Community
                    </h3>
                    <ul className="space-y-2">
                        {communityLinks.map((i, ind) => (
                            <li key={ind}>
                                <a href={i.href}>{i.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
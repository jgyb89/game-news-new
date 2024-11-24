import { Link } from "react-router-dom";
import GamenewsLogo from '../assets/gamenews-logo.svg';

const Topbar = () => {
  return (
    <section className="topbar">
        <div className="flex-betwee py-4 px-5">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src={GamenewsLogo}
                    alt="logo"
                />
            </Link>

            <div className="flex gap-4">
                
            </div>
        </div>
    </section>
  )
}

export default Topbar;
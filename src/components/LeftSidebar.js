import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './LeftSidebar.scss'; // Import custom styles
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GamenewsLogo from '../assets/gamenews-logo.svg';
import Create from '../assets/create.svg';
import profileCat from '../assets/profile-cat.webp';

const LeftSidebar = () => {
    const navigate = useNavigate(); // For navigation
    const location = useLocation(); // For highlighting the active item
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setExpanded(window.innerWidth > 1200);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = (isExpanded) => {
        setExpanded(isExpanded);
    };

    return (
        <SideNav
            expanded={expanded}
            onToggle={handleToggle}
            className="custom-sidenav"
            onSelect={(selected) => {
                const path = selected === "home" ? "/" : selected; // Adjust for home route
                if (location.pathname !== path) {
                    navigate(path); // Navigate only if the path is different
                }
            }}
        >
            <div className="custom-sidenav-container">
                <SideNav.Nav selected={location.pathname}>
                    {/* Logo acting as the Home link */}
                    <div
                        className="logo"
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={GamenewsLogo} alt="Game News Logo" />
                    </div>

                    <NavItem eventKey="search" onClick={() => navigate("/search")} className="nav-link">
                        <NavIcon>
                            <div className="nav-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">Search</p>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="news" className="nav-link" onClick={() => navigate("/news")}>
                        <NavIcon>
                            <div className="nav-icon">
                                <i className="fa-regular fa-newspaper"></i>
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">News</p>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="notifications" className="nav-link" onClick={() => navigate("/notifications")}>
                        <NavIcon>
                            <div className="nav-icon">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">Notifications</p>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="discover" className="nav-link" onClick={() => navigate("/discover")}>
                        <NavIcon>
                            <div className="nav-icon">
                                <i className="fa-regular fa-compass"></i>
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">Discover</p>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="groups" className="nav-link" onClick={() => navigate("/groups")}>
                        <NavIcon>
                            <div className="nav-icon">
                                <i className="fa-solid fa-user-group"></i>
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">Groups</p>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="create" className="nav-link" onClick={() => navigate("/create")}>
                        <NavIcon>
                            <div className="nav-icon">
                                <img src={Create} alt="Create" />
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">Create</p>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="profile" className="nav-link" onClick={() => navigate("/profile")}>
                        <NavIcon>
                            <div className="nav-icon">
                                <img src={profileCat} className="profile" alt="Profile" />
                            </div>
                        </NavIcon>
                        <NavText>
                            <p className="nav-text">Profile</p>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </div>
        </SideNav>
    );
};

export default LeftSidebar;

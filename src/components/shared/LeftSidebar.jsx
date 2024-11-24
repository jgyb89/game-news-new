import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './LeftSidebar.scss'; // Import custom styles
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GamenewsLogo from '../../assets/gamenews-logo.svg';
import Create from '../../assets/create.svg';
import profileCat from '../../assets/profile-cat.webp';

const LeftSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
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

    const navItems = [
        { eventKey: "/sign-in", icon: "fa-solid fa-magnifying-glass", text: "Sign-in" },
        { eventKey: "/search", icon: "fa-solid fa-magnifying-glass", text: "Search" },
        { eventKey: "/news", icon: "fa-regular fa-newspaper", text: "News" },
        { eventKey: "/notifications", icon: "fa-regular fa-heart", text: "Notifications" },
        { eventKey: "/discover", icon: "fa-regular fa-compass", text: "Discover" },
        { eventKey: "/groups", icon: "fa-solid fa-user-group", text: "Groups" },
        { eventKey: "/create", icon: null, text: "Create", image: Create },
        { eventKey: "/profile", icon: null, text: "Profile", image: profileCat },
    ];

    return (
        <SideNav
            expanded={expanded}
            onToggle={handleToggle}
            className="custom-sidenav"
            onSelect={(selected) => {
                if (location.pathname !== selected) navigate(selected);
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

                    {/* Render Navigation Items */}
                    {navItems.map((item) => (
                        <NavItem
                            key={item.eventKey}
                            eventKey={item.eventKey}
                            onClick={() => navigate(item.eventKey)}
                            className="nav-link"
                        >
                            <NavIcon>
                                {item.icon ? (
                                    <div className="nav-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                ) : (
                                    <div className="nav-icon">
                                        <img src={item.image} alt={item.text} />
                                    </div>
                                )}
                            </NavIcon>
                            <NavText>
                                <p className="nav-text">{item.text}</p>
                            </NavText>
                        </NavItem>
                    ))}
                </SideNav.Nav>
            </div>
        </SideNav>
    );
};

export default LeftSidebar;

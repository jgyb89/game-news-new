import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './LeftSidebar.scss'; // Import custom styles
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Missing import for useNavigate
import GamenewsLogo from '../gamenews-logo.svg';

const LeftSidebar = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(true);

    // Manage expanded state based on screen size
    useEffect(() => {
        const handleResize = () => {
            setExpanded(window.innerWidth > 1200); // Expand if screen width > 1200px
        };

        // Add event listener for resize and call once to set initial state
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    }, []);

    return (
        <SideNav
            expanded={expanded}
            className="custom-sidenav"
            onSelect={(selected) => {
                console.log(selected);
                if (selected === "home") {
                    navigate('/'); // Navigate to the root path
                } else {
                    navigate('/' + selected); // Navigate to other paths
                }
            }}
        >
            <SideNav.Nav defaultSelected="home">
                {/* Logo acting as the Home link */}
                <div
                    className="logo"
                    onClick={() => navigate('/')} // Navigate to the root page on click
                    style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
                >
                    <img src={GamenewsLogo} alt="Game News Logo" />
                </div>

                <NavItem eventKey="search">
                    <NavIcon className="nav-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </NavIcon>
                    <NavText className="nav-text">Search</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
};

export default LeftSidebar;

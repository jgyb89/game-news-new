import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './LeftSidebar.scss'; // Import custom styles

const LeftSidebar = () => {
    return (
        <SideNav
            className="custom-sidenav"
            onSelect={(selected) => {
                console.log(selected);
            }}
        >
            <SideNav.Nav defaultSelected="home">
                <NavItem className="nav-item">
                    <NavIcon className="nav-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </NavIcon>
                    <NavText className="nav-text">Home</NavText>
                </NavItem>
                <NavItem className="nav-item">
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

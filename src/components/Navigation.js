import { Navbar, Nav, Container, Image } from "react-bootstrap";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/global";
import brandlogo from "../assets/images/logo.png";
import navlogo from "../assets/images/menu.png";
import {Link} from "react-router-dom";

// Particular CSS
const Style = styled.div`
.navbar-toggler-icon{
    background-image: url(${navlogo});
    width: 80px;
    height: 80px;
}
`;

const Navigation = () => {
    return ( 
        <Style>
            <GlobalStyle>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Image className='brandlogo' id='brandlogo' src={brandlogo} alt="knowledge" />
                        <span className='brandtitle'>PlanTrip </span>      
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link to="/add" className="nav-link m-2">Get GeoCode</Link>
                    </Nav>
                        
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </GlobalStyle>
        </Style>
     );
}
 
export default Navigation;
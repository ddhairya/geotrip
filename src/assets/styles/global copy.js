import styled from "styled-components";

const GlobalStyle = styled.div`
    .brandlogo{
        width:72px;
        margin-right: 2rem;

        @media(max-width:578px){
            width: 60px;
            margin-right: 0.5rem;
        }
    }
    .brandtitle{
        height:72px;
        font-size: 40px;
        font-weight:500;
        vertical-align: top;
        padding: 0.5rem;
        margin-right: 1rem;
        text-decoration: none;

        @media(max-width:578px){
            font-size: 30px;
            font-weight:500;
            padding-left: 0.2rem;
        }
    }
    .navbar {
        background-color: #ffffff !important;
        padding: 1rem;
    }
    .navbar-brand{
        font-family: cursive;
        text-decoration: none;
        color:#ffce02;
        align-items: center;
        &:hover{
            color:#06bcee;
        }
    }
    .navbar-nav {
        align-items: center;
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(250,185,64,.85) !important;
        font-size: larger;
        font-family: cursive;

        &:hover{
            color: rgba(250,185,64) !important; 
            font-weight:bold;           
        }
    }
    .navbar-toggler {
        padding: 0.1rem 0.2rem;
    }
    .separatorMenu{
        margin-top: 0px;
        padding: 0;
        height: 2px;
        opacity: 0.75;
        background-color: #06bcee;
    }
    #mapid{
        height: 85vh;
        
    }
    .navHeader{
        flex: 1;
        flex-direction: row;
        display: flex;
        align-items: center;
    }
    .addDest{
        background-color: white;
        border-color: #06bcee;
        color:rgba(250,185,64,.85);
        font-family: cursive;
        padding: 0px;

    }

`;

export default GlobalStyle;
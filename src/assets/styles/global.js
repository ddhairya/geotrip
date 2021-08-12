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
        margin: 0.5rem 0.5rem 0.5rem 1rem;
        background-color: white;
        border-color: #06bcee;
        color:rgba(250,185,64,.85);
        font-family: fantasy;
        padding: 0.4rem;

    }
    .addDestImg{
        height:32px;
    }
    .addDestText{
        margin:0.2rem;
    }
    .leaflet-div-icon{
        background: none;
        border: none;
    }
    .destName{
        font-size: medium;
        font-weight: bold;
        white-space: nowrap;
    }

`;

export default GlobalStyle;
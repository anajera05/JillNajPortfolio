import styled from "styled-components";
import { Link } from "react-router-dom"
import Navigation from "./Navigation";

const StyledHeader = styled.header`
    display: inline-flex;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 768px){
        display: flex;
        padding-top: 1vh;
        align-items: center;
    }
`

const StyledLogo = styled.img`
    width: 100%;
    @media screen and (max-width: 768px){
        width: 40%;
        padding-left: 6vw;
    }
`

const StyledContainer = styled.div`
    display: inline-flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: center;
        flex-direction: row;
    }
`

const StyledNav = styled.div`
    display: flex;

`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
`

export default function Header() {
    return(
        <StyledContainer>
            <StyledHeader>
                <StyledLink to={"/"}><StyledLogo src={"jillnaj_logo.png"} alt="Jillnaj logo" /></StyledLink>
            </StyledHeader>
            <StyledNav>
                <Navigation />
            </StyledNav>
        </StyledContainer>
    )
}

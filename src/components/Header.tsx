import styled from "styled-components";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
    display: inline-flex;
    justify-content: center;
    width: 100%;
`

const StyledLogo = styled.img`
    width: 100%;
`

const StyledContainer = styled.div`
    display: inline-flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
`

export default function Header() {
    return(
        <StyledContainer>
            <StyledHeader>
                <StyledLogo src={"jillnaj_logo.png"} alt="Jillnaj logo" />
            </StyledHeader>
            <Navigation />
        </StyledContainer>
    )
}

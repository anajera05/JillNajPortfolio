import styled from "styled-components";
const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLogo = styled.img`
    width: 40%;
`

export default function Header() {
    return(
        <StyledHeader>
            <StyledLogo src={"jillnaj_logo.png"} alt="Jillnaj logo" />
        </StyledHeader>
    )

}
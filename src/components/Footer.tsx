import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer(){
    const StyledFooter = styled.footer`
        background-color: #537979;
        color: #E8FAF7;
        padding: 1vh 2vw;
        display: flex;
        font-size: calc(3px + 1vw);

    `
    const StyledLink = styled(Link)`
        color: #E8FAF7;
    `
    return(
        <StyledFooter>
            <p>All rights reserved by Jilliane Najera: <StyledLink to="">Credits</StyledLink> &#169;</p>
        </StyledFooter>
    )
}
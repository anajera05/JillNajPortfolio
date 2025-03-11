import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
`

const StyledNavItem = styled.li`
    margin: 2vh auto;
    display: flex;
    font-size: calc(5px + 2vh);
    font-weight: bold;
    &.sub{
        margin: 0 auto 1vh auto;
        font-size: calc(5px + 1vh);
        font-weight: normal;
    }
`

const StyledLink = styled(Link)`
    color: #537979;
    background-color: transparent;
    text-decoration: none;
`

export default function Navigation() {
    return(
        <nav>
            <StyledList>
                <StyledNavItem>
                    <StyledLink to={"/"}>Homepage</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/Animation"}>Animation</StyledLink>
                </StyledNavItem>
                <StyledNavItem className="sub">
                    <StyledLink to={"/2025AnimationReel"}>2025 Animation Reel</StyledLink>
                </StyledNavItem>
                <StyledNavItem className="sub">
                    <StyledLink to={"/MiscAnimations"}>Misc. Animations</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/Fabrication"}>Fabrication</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/CharacterDesign"}>Character Design</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/AboutMe"}>About Me</StyledLink>
                </StyledNavItem>
            </StyledList>
        </nav>
    );
}

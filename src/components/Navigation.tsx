import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    top: 0;

    @media screen and (max-width: 750px) {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: whitesmoke;
        transition: right 0.5s ease;
        z-index: 10;
        box-shadow: 10px 5px 5px 5px #2d393e;

        right: -100%;  
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.open {
        right: 0;  
    }
`;


const StyledNavItem = styled.li`
    margin: 2vh auto;
    display: flex;
    font-size: calc(5px + 2vh);
    font-weight: bold;
    text-align: center;
    &.sub {
        margin: 0 auto 1vh auto;
        font-size: calc(5px + 1vh);
        font-weight: normal;
    }
    @media screen and (max-width: 750px) {
        padding: 5vh 2vw;
        margin: 0;
        text-align: center;
        align-items: center;
        &.sub {
            display: none; 
        }
    }
`;

const StyledLink = styled(Link)`
    color: #537979;
    background-color: transparent;
    text-decoration: none;
`;

const HamburgerIcon = styled.div`
    display: none;
    z-index: 20;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 4vw;
        height: 2vh;
        cursor: pointer;
        padding-right: 2vw;
    }

    div {
        width: 100%;
        height: 0.5vh;
        background-color: #313d43;
        border-radius: 5px;
    }
`;


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);  // Toggle menu open/close
    };

    return (
        <>
            <HamburgerIcon className={isOpen ? 'open' : ''} onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </HamburgerIcon>

            <nav>
                <StyledList onClick={toggleMenu} className={isOpen ? 'open' : ''}>
                    <StyledNavItem>
                        <StyledLink to="/" >Homepage</StyledLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledLink to="/Animation">Animation</StyledLink>
                    </StyledNavItem>
                    <StyledNavItem className="sub">
                        <StyledLink to="/2025AnimationReel">2025 Animation Reel</StyledLink>
                    </StyledNavItem>
                    <StyledNavItem className="sub">
                        <StyledLink to="/MiscAnimations">Misc. Animations</StyledLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledLink to="/Fabrication">Fabrication</StyledLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledLink to="/CharacterDesign">Character Design</StyledLink>
                    </StyledNavItem>
                    <StyledNavItem>
                        <StyledLink to="/AboutMe">About Me</StyledLink>
                    </StyledNavItem>
                </StyledList>
            </nav>
        </>
    );
}

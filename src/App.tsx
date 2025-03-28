import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Homepage from "./components/Main/Homepage.tsx"
import Animation from "./components/Main/Animation/Animation.tsx"
import AnimationReel from "./components/Main/Animation/AnimationReel.tsx"
import MiscAnimations from "./components/Main/Animation/MiscAnimations.tsx"
import Fabrication from "./components/Main/Fabrication.tsx"
import CharacterDesign from "./components/Main/CharacterDesign.tsx"
import AboutMe from "./components/Main/AboutMe.tsx"


import styled, { createGlobalStyle } from "styled-components";

// Create a global style to change the body background color
const GlobalStyle = createGlobalStyle`
    body {
        background-color: #E8FAF7;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 0.5vw;
        height: 0.5vw;
        border: 0;
        opacity: 0.2;
    }
    ::-webkit-scrollbar-track {
        background: rgba(241, 241, 241, 0.3);
    }
    ::-webkit-scrollbar-thumb {
        background: #313d43;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #2d393e;
    }
`;

const PageStylingDiv = styled.div`
    background-color: #E8FAF7;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    padding: 3vw;
    position: relative;
    box-sizing: border-box;
    @media screen and (max-width: 768px){
        padding: 0;
        margin: 0;
    }    
`;

const NavDiv = styled.div`
    width: 20%;
    position: fixed;
    height: 70%;
    justify-content: center;
    align-items: center;
    display: flex;
    box-sizing: border-box;

    @media screen and (max-width: 768px){
        height: 20%;
        width: 100%;
        justify-content: center;
    }
`;

const MainDiv = styled.div`
    margin-left: 25%;
    height: 100%;
    width: 70%;
    display: flex;
    padding: 0 2vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-left: 0;
        margin-top: 20%
    }
`

function Root(){
    return(
        <>
            <GlobalStyle />
            <PageStylingDiv>
                <NavDiv>
                    <Header/>
                </NavDiv>
                <MainDiv>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/Animation" element={<Animation/>}/>
                        <Route path="/2025AnimationReel" element={<AnimationReel/>}/>
                        <Route path="/MiscAnimations" element={<MiscAnimations/>}/>
                        <Route path="/Fabrication" element={<Fabrication/>}/>
                        <Route path="/CharacterDesign" element={<CharacterDesign/>}/>
                        <Route path="/AboutMe" element={<AboutMe/>}/>
                    </Routes>
                </MainDiv>
            </PageStylingDiv>
            <Footer />
        </>
    )
}

const router = createBrowserRouter([{ path: "*", Component: Root}])

export default function Body(){
    return <RouterProvider router={router}/>

}
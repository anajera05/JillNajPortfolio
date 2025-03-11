import styled from 'styled-components';

const VideoView = styled.img`
    width: 80%;
`

const Logo = styled.img`
    @media screen and (max-width: 768px){
        padding-top: 3vh;
        width: 70%
    }
`

export default function Homepage(){
    return(
        <>
            <Logo src={"jillnaj_logo.png"} alt="jillnaj logo"/>
            <VideoView src={"sharkkkk.jpeg"} alt="video filler"/>
        </>
    )
}
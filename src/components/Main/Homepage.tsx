import styled from 'styled-components';


const VideoView = styled.video`
    width: 90%;
`

const Logo = styled.img`
    width: 20%;
    @media screen and (max-width: 768px){
        padding-top: 3vh;
        width: 70%
    }
`

export default function Homepage(){
    return(
        <>
            <Logo src={"jillnaj_logo.png"} alt="jillnaj logo"/>
            <VideoView src={"Reel w Audio.mp4"} controls={true} poster="sharkkkk.jpeg"/>
        </>
    )
}
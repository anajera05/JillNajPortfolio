import styled from 'styled-components';

const VideoView = styled.img`
    width: 80%;
`

export default function Homepage(){
    return(
        <>
            <img src={"jillnaj_logo.png"} alt="jillnaj logo"/>
            <VideoView src={"sharkkkk.jpeg"} alt="video filler"/>
        </>
    )
}
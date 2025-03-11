import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
`

const VideoView = styled.img`
    width: 80%;
`

export default function Homepage(){
    return(
        <StyledDiv>
            <img src={"jillnaj_logo.png"} alt="jillnaj logo"/>
            <VideoView src={"sharkkkk.jpeg"} alt="video filler"/>
        </StyledDiv>
    )
}
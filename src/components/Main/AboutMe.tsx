import styled from 'styled-components'
import { Link } from "react-router-dom"

const StyledHeading = styled.h2`
    font-size: calc(10px + 5vh);
    font-weight: normal;
    margin-bottom: 1vh;
`
const ProfileImage = styled.img`
    width: 30vw;
    @media screen and (max-width: 768px){
        width: 70%
    }
`

const MainContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

const TextDiv= styled.div`
    display: flex;
    flex-direction: column;
    color: #537979;
    font-size: calc(5px + 2vh);
    @media screen and (max-width: 768px){
        padding: 0 5vw;
    }

`

const Contacts = styled.div`
    filter: invert(44%) sepia(7%) saturate(1552%) hue-rotate(131deg) brightness(98%) contrast(90%);
    display: flex;
    justify-content: center;
    padding-top: 2vh;
    gap: 3vw;
    @media screen and (max-width: 768px){
        padding-bottom: 3vh;
    }
`

const ContactLink = styled(Link)`
    width: 10%
`

const ContactIcon = styled.img`
    width: 100%
`


export default function AboutMe(){
    return(
        <>
        <StyledHeading>About me</StyledHeading>
            <MainContentDiv>
                <ProfileImage src={"profile.png"} alt="profile picture" />
                <TextDiv>
                    <p>I'm Jilliane, a Filipino-American multimedia animator from New Jersey! I am a student at the Maryland Institute College of Art (MICA) studying for a BFA in animation with a minor in illustration.</p>
                    <p>I have always been fascinated with how animation can bring anything to life. Practicing different mediums in animation helps me explore each of their strengths to tell stories, and I always aim to find ways to use these materials to improve my skills. I enjoy solving puzzles, playing games, or taking a nice hike/bike ride outdoors in my free time!</p>
                    <p>Thank You for looking through my website! I can be contacted through the icons below :)</p>
                    <Contacts>
                        <ContactLink to={"https://www.linkedin.com/in/jillianemaenajera/"} target="_blank"><ContactIcon src={"linkedin_logo.png"} alt="linkedin logo" /></ContactLink>
                        <ContactLink to={"mailto:someone@example.com"} target="_blank"><ContactIcon src={"mail_icon.png"} alt="linkedin logo" /></ContactLink>
                    </Contacts>
                </TextDiv>
            </MainContentDiv>
        </>
    )
}
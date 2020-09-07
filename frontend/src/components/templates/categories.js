import React from "react"
import {graphql} from "gatsby"

import Layout from "../layout"


import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import Link from 'gatsby-link';


const Section = styled.section`
    width:70%;
    margin: 5vw auto;
`

const FirstColumn = styled.div`
    width:55%;
    height: 80%;
`

const Title = styled.h2`
    width:66%;
    height: fit-content;
    margin: 0 0 3vw 0;
    font-size: 2.5vw
`

const DivButtons = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 35vh;
   width: 13vw;
   text-align:left;
   margin: 0 auto;
`

const Paragraph = styled.p`
    width: 100%;
    font-weight: bold;
    font-size: 1vw;
`

const Button = styled.button`
    display:flex;
    justify-content: space-around;
    background: #212121;
    color: #ededed;
    border: none;
    border-radius: 90px;
    font-size: 0.8vw;
    font-weight: bold;
    padding: 0.5vw 1vw;
    margin: 0 auto;
    width:100%;
    cursor:pointer;
`

const FlexDiv = styled.div`
    display:flex;
    margin: 0 auto;
`


const StyledGallery = styled.div`
    display:flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 1vw;
`

const StyledDivImage = styled.div`
   background: blue;
   width:100%;
   object-fit:content;
`

const StyledImage = styled.img`
   width:100%;
   height:100%;
`

const DivTest = styled.div`
   width:100%;
   height: 100%
`

const PopUp = styled.div`
   width:50%;
   height: 50%;
   position: fixed;
   bottom: 25vh;
   left: 25vw;
   display:flex;
   align-items: center;
   display: none;
`
const NavBar = styled.nav`
   position: fixed;
   right: 0;
   top:1vh;
   display:flex;
   flex-direction: column;
   justify-content: space-around;
   object-fit: cover;
   height: 100vh;
   width: 6vw;
  
`

const ContainerLogo = styled.nav`
   display:flex;
   flex-direction: column;
   justify-content: space-around;
   background: #212121;
   min-height: 50vh;
   max-height:60vh;
   overflow-y: scroll;
   box-shadow: 0 3px 18px rgba(0, 0, 0, 0.27);
`

const ImgNav = styled.img`
    height: 8vh;
    width: 5v;
`

let clicked = 0;

let videoUrl = "https://www.youtube.com/embed/ba9bNPUQ2tg"

const test = (e, data) => {
    const popUp = document.getElementById('popUpNone');
    let id = e.target.id
    let videoDataClicked = data.strapiCategories.associations[id].video
    let iframe = document.getElementById("iframePopUp");
    if (clicked === 0) {
        popUp.style.display = "block"
        clicked = 1;
        iframe.src = videoDataClicked;
    } else {
        popUp.style.display = "none";
        clicked = 0
    }
}

const close = () => {
    document.getElementById('popUpNone').style.display = "none";
    clicked = 0;
}


const AssociationPage = ({data}) => (
    <Layout>
        <NavBar className="asideNavBar">
            <ContainerLogo id="containerLogo">
                {data.strapiCategories.associations.map((element) => (
                    <Link to={"#" + element.title}>
                        <ImgNav className="imgGenerated" src={element.logo.childImageSharp.fixed.src}/></Link>
                ))}
            </ContainerLogo>
        </NavBar>
        {data.strapiCategories.associations.map((document, index) => (
            <Section>
                <FlexDiv id={document.title}>
                    <FirstColumn>
                        <Title>{document.title}</Title>
                        <Paragraph>{document.description}</Paragraph>
                    </FirstColumn>
                    <FirstColumn>
                        <DivButtons>
                            <Button id={index} onClick={((e) => test(e, data, document))}
                                    data-videourl={document.video}><span><FontAwesomeIcon icon={faPlay}/></span>Vidéo de
                                présentation</Button>
                            <a className="url" href={document.reseau} target="_blank">
                                <Button>Suivez-nous!</Button>
                            </a>
                            <a href={document.urlForm}
                               className={document.title === "BDE Nova" ? "url disabled" : "url"} target="_blank">
                                <Button>{document.title === "BDE Nova" ? "Prochainement disponible" : "Postuler"}</Button>
                            </a>
                        </DivButtons>
                    </FirstColumn>
                </FlexDiv>
                <StyledGallery>
                    <StyledDivImage className={document.firstImage === null ? "none" : "one"}>
                        <StyledImage src={document.firstImage.childImageSharp.fixed.src}
                                     alt={"image une" + document.title}/>
                    </StyledDivImage>
                    <StyledDivImage className={document.secondImage === null ? "none" : "one"}>
                        <StyledImage
                            src={document.secondImage === null ? null : document.secondImage.childImageSharp.fixed.src}
                            alt={document.secondImage === null ? null : "image deux" + document.title}/>
                    </StyledDivImage>
                    <StyledDivImage className={document.thirdImage === null ? "none" : "one"}>
                        <StyledImage
                            src={document.thirdImage === null ? null : document.thirdImage.childImageSharp.fixed.src}
                            alt={document.thirdImage === null ? null : "image trois" + document.title}/>
                    </StyledDivImage>
                </StyledGallery>
            </Section>
        ))}
        <PopUp id="popUpNone">
            <div className="closePopUp" onClick={close}>
                <button>Fermer la popUp</button>
            </div>
            <iframe
                id="iframePopUp"
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; picture-in-picture"
                allowFullScreen/>
        </PopUp>
    </Layout>
)

export const pageQuery = graphql`
query UserTemplate($id: String!) {
  strapiCategories(id: {eq: $id}) {
    title
    id
    associations {
      title
      description
      urlForm
      firstImage {
        childImageSharp {
          fixed(quality: 100, fit: COVER, width: 800) {
            src
          }
        }
      }
      secondImage {
        childImageSharp {
          fixed(quality: 100, fit: COVER, width: 800) {
            src
          }
        }
      }
      thirdImage {
        childImageSharp {
          fixed(quality: 100, fit: COVER, width: 800) {
            src
          }
        }
      }
      reseau
      video
      logo {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
}
`

export default AssociationPage



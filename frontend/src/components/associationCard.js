/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faFacebook,
    faTwitter,
    faLinkedin,
    faYoutube,
    faTwitch,
    faPinterest
} from '@fortawesome/free-brands-svg-icons'

import "./layout.css"
import Cta from "./cta";

const Section = styled.section`
    width:70%;
    margin: 2vw auto;
    height: 50vh;
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
    height:100%;
`

const StyledDiv = styled.div`
    display:flex;
    justify-content: space-around;
    background: #212121;
    color: #ededed;
    border: none;
    border-radius: 90px;
    font-size: 1.2vw;
    font-weight: bold;
    padding: 0.5vw 0;
    margin: 0 auto;
    width:100%;
    cursor:pointer;
`

const StyledGallery = styled.div`
    display:flex;
    justify-content: space-around;
    background: red;
    width: 100%;
`

const StyledDivImage = styled.div`
   background: blue;
`

const AssociationCard = (props) => {
    return (
        <Section>
            <FlexDiv>
                <FirstColumn>
                    <Title>Nom Association</Title>
                    <Paragraph>Donec et rhoncus orci. Donec viverra accumsan leo vitae mattis. Pellentesque vel diam
                        sodales, lobortis tellus eu, hendrerit nunc. Fusce quis sapien viverra, varius orci ut, auctor
                        lacus. Nunc eu scelerisque turpis. Proin dignissim cursus pellentesque. Maecenas posuere nisi
                        metus,
                        in bibendum lorem suscipit nec. Cras nulla ligula, sodales eu blandit eget, placerat eget nunc.
                        Nam
                        sit amet ullamcorper est. Nullam elementum magna non sodales interdum. Aenean laoreet purus
                        sapien,
                        a dignissim mauris sollicitudin in. Integer eget sollicitudin orci. Etiam eros massa, mattis nec
                        purus at, consectetur fringilla sapien. Donec vel molestie metus. Mauris tincidunt, massa non
                        molestie malesuada, leo mauris ultrices lacus, at pulvinar dui orci sit amet tellus. In hac
                        habitasse platea dictumst.</Paragraph>
                </FirstColumn>
                <FirstColumn>
                    <DivButtons>
                        <Button><span><FontAwesomeIcon icon={faPlay}/></span>Vidéo de présentation</Button>
                        <StyledDiv>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </StyledDiv>
                        <Button>Postuler</Button>
                    </DivButtons>
                </FirstColumn>
            </FlexDiv>
            <StyledGallery>
                <StyledDivImage>ok</StyledDivImage>
                <StyledDivImage>pk</StyledDivImage>
                <StyledDivImage>ok</StyledDivImage>
            </StyledGallery>
        </Section>
    )
}


export default AssociationCard;

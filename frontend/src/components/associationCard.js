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

import Link from 'gatsby-link';

import "./layout.css"
import Cta from "./cta";


const Section = styled.section`
    width:70%;
    margin: 5vw auto;
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
   width:30%;
   object-fit:content;
`

const StyledImage = styled.img`
   width:100%;
   height:100%;
`

const AssociationCard = (props) => {
    return (
        <Section>
            <FlexDiv>
                <FirstColumn>
                    <Title>{props.title}</Title>
                    <Paragraph>{props.content}</Paragraph>
                </FirstColumn>
                <FirstColumn>
                    <DivButtons>
                        <Button><span><FontAwesomeIcon icon={faPlay}/></span>Vidéo de présentation</Button>
                        <StyledDiv>
                            <p>{props.test}</p>
                        </StyledDiv>
                        <Link className="url" to={props.url}><Button>Postuler</Button></Link>
                    </DivButtons>
                </FirstColumn>
            </FlexDiv>
            <StyledGallery>
                <StyledDivImage>
                    <StyledImage src={props.first} alt={"image une" + document.title}/>
                </StyledDivImage>
                <StyledDivImage>
                    <StyledImage src={props.second} alt={"image deux" + document.title}/>
                </StyledDivImage>
                <StyledDivImage>
                    <StyledImage src={props.third} alt={"image trois" + document.title}/>
                </StyledDivImage>
            </StyledGallery>
        </Section>
    )
}


export default AssociationCard;

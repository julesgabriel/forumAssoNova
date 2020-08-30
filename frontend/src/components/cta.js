/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Link from 'gatsby-link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "./layout.css"

const Button = styled.button`
    background: #212121;
    border: 1px solid #e74111;
    color: #e74111;
    border-radius: 90px;
    font-size: 1vw;
    font-weight: bold;
    padding: 0.5vw 1vw;
    margin: 0 auto;
    width:100%;
    cursor:pointer;
`

const StyledContent = styled.div`
    display: flex;
    width: 100%;
    align-items:center;
`

const StyledText = styled.p`
    width: 90%; 
    font-size:0.8vw;
    margin: 0 0 0 0.8vw;
`

const Cta = (props) => {
    return (
        <Link to={props.link}>
            <Button className={props.className}>
                {props.content}
            </Button>
        </Link>
    )
}


export default Cta;

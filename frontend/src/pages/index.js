import React from "react";

import CountUp from 'react-countup';
import Layout from "../components/layout"
import './style/index.css';
import SEO from "../components/seo"

import Cta from '../components/cta';

const firstVideo = "https://www.youtube.com/embed/UJ83fC-2HhM"
const secondVideo = "https://www.youtube.com/embed/-52MWBzal2c";
let currentVideo = firstVideo;


let day = new Date();
let hour = day.getHours();
let minutes = day.getMinutes();

setTimeout(function () {
    let iframeHome = document.getElementById('iframeHome');
    if (hour === 22 && iframeHome !== secondVideo) {
        iframeHome.src = secondVideo
    } else if (hour === 23 && iframeHome !== firstVideo) {
        iframeHome.setAttribute("src", firstVideo);
    }
}, 1000)

const IndexPage = () => (
    <Layout>
        <SEO title="Accueil"/>
        <section className="titleSection">
            <h1>Les associations étudiantes <div className="translate"><span className="duSpan">du </span><span>Pôle Léonard De Vinci</span>
            </div></h1>

        </section>
        <section className="keyNumbersSection">
            <ol>
                <li><CountUp delay={0.1} end={7500} duration={1}/><strong>étudiants</strong></li>
                <li><CountUp delay={0.1} end={55} duration={1}/><strong>Associations</strong></li>
                <li><CountUp delay={0.1} end={5800} duration={1}/><strong>m² de locaux</strong></li>
                <li><CountUp delay={0.1} end={300} duration={1}/><strong>Entreprises partenaires</strong></li>
            </ol>
        </section>
        <section className="sectionPresentation">
            <p className="boldText">Le pôle Léonard de Vinci, est composé de 3 écoles (ESILV, EMLV et IIM), regroupant

                plus de <span>7 000 étudiants</span> ! Comme ça fait un bon paquet de monde, et que c’est cool de
                rencontrer des gens
                quand même,
                <span> la transversalité</span> entre les écoles est hyper présente : semaines transverses, sport
                obligatoire, et on y vient, le meilleur... <span>les assos!</span> <br/>
                Les assos, c’est clairement le moyen le plus simple et sympa de te faire des potes. Actuellement, il y a
                pas moins de <span>54 assos</span> ! Il y
                a <span>du sport</span>, <span>du gaming</span>, <span>de l’événementiel</span>, <span>du théâtre</span>, <span>de la cuisine</span>, <span>de
                l’aquaponey</span>. Bref t’as vraiment moyen de trouver ton bonheur! <br/><br/>

                Tu vas donc pouvoir te réunir avec des gens qui ont les mêmes centres d'intérêt que toi, vous allez
                organiser des événements de plus ou moins grande envergure (voyages / compétition / rencontres à
                thèmatique). Et puis si t’es actif t’as des points bonus pour compenser tes cours mais ça faut pas
                dire... <br/><br/>

                Et donc pour faire tourner toutes ces assos, on a besoin de <span>TOI</span> ! Rejoins-nous dans cette
                aventure de
                malade, tu vas apprendre à gérer une équipe, démarcher des entreprises, organiser des événements, et
                évidemment découvrir des personnes incroyables qui vont devenir ta famille. <br/><br/>
                On espère que les assos n’ont plus de secrets pour toi, et que t’es <span>motivé.e</span> pour faire
                vibrer le pôle à
                nos côtés !
                <br/><br/>
                <span>Dear exchange students</span>, associations <span>being</span> international, understand that you
                are also invited to join
                this associative forum! We count on your presence and <span>investment</span> in our associations and we
                will be
                there all day long to meet your needs! See you soon 😉
            </p>
        </section>

        <section className="forumDigitale">
            <h2>Un forum totalement <span>digitale</span></h2>
            <p className="boldText">
                Chaque année, le forum associatif a lieu au pôle, en rue basse et 55 associations font leur présentation
                à plusieurs centaines d’étudiants dans un espace clos de moins de 200 mètres carrés. Dans le contexte
                actuel, t’imagines bien que ça risque d’être assez compliqué ! <br/><br/>

                Le forum asso ne pourra donc pas avoir lieu directement au sein du pôle... mais j’ai une bonne nouvelle
                pour toi ! Nous avons pensé à tout ! Et c’est pourquoi nous t’avons concocté un forum 100% digital,
                interactif et pensé pour toi. L’objectif est de revisiter le concept et t’offrir un forum asso 2.0
                ! <br/> <br/>

                Grâce à cela, tu vas pouvoir t’intéresser aux différentes assos du pôle, échanger et peut être intégrer
                l’asso de ton choix 😉.
            </p>
        </section>

        <section className="videoSection">
            <iframe
                id="iframeHome"
                src={currentVideo + "?autoplay=1&cc_load_policy=1&vq=hd720"}
                frameBorder="0"
                allow="accelerometer; picture-in-picture"
                allowFullScreen/>
        </section>
        <section className="discordSectionHome">
            <h2 className="bounce">
                Venez discuter !
            </h2>
            <p>
                Des membres des associations sont là pour répondre à vos questions <span>toute la journée</span> !
            </p>
            <Cta link="https://discord.gg/X77ztWs" className="buttonDiscord" content="discord.com/X77ztWs"/>
        </section>
    </Layout>
)

export default IndexPage

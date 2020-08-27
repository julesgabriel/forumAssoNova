import React from "react";

import CountUp from 'react-countup';
import Layout from "../components/layout"
import './style/index.css';
import SEO from "../components/seo"
<<<<<<< HEAD
import {graphql, useStaticQuery} from "gatsby";

import Cta from '../components/cta';

const IndexPage = ({data}) => (
=======


const IndexPage = () => (
>>>>>>> 57af438063de5fe91ec1d2923a1f90269f541db5
    <Layout>
        <SEO title="Accueil"/>
        <section className="titleSection">
            <h1>Les associations étudiantes du <div className="positionText">
                <span>Pôle Léonard De Vinci</span>
            </div>
            </h1>
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
<<<<<<< HEAD
                plus de <span>7 000 étudiants</span> ! Comme ça fait un bon paquet de monde, et que c’est cool de
                rencontrer des gens
                quand même,
                <span> la transversalité</span> entre les écoles est hyper présente : semaines transverses, sport
                obligatoire, et on y
                vient, le meilleur... <span>les assos!</span> <br/>
                Les assos, c’est clairement le moyen le plus simple et sympa de te faire des potes. Actuellement, il y a
                pas moins de <span>55 assos</span> ! Il y
                a <span>du sport</span>, <span>du gaming</span>, <span>de l’événementiel</span>, <span>du théâtre</span>, <span>de la cuisine</span>, <span>de
                l’aquaponey</span>. Bref t’as vraiment moyen de trouver ton bonheur! <br/><br/>
=======
                plus de 7 000
                étudiants ! Comme ça fait un bon paquet de monde, et que c’est cool de rencontrer des gens quand même,
                la transversalité entre les écoles est hyper présente : semaines transverses, sport obligatoire, et on y
                vient, le meilleur... les assos! <br/>
                Les assos, c’est clairement le moyen le plus simple et sympa de te faire des potes. Actuellement, il y a
                pas moins de 55 assos ! Il y a du sport, du gaming, de l’événementiel, du théâtre, de la cuisine, de
                l’aquaponey. Bref t’as vraiment moyen de trouver ton bonheur! <br/><br/>

>>>>>>> 57af438063de5fe91ec1d2923a1f90269f541db5
                Tu vas donc pouvoir te réunir avec des gens qui ont les mêmes centres d'intérêt que toi, vous allez
                organiser des événements de plus ou moins grande envergure (voyages / compétition / rencontres à
                thèmatique). Et puis si t’es actif t’as des points bonus pour compenser tes cours mais ça faut pas
                dire... <br/><br/>
<<<<<<< HEAD
                Et donc pour faire tourner toutes ces assos, on a besoin de <span>TOI</span> ! Rejoins-nous dans cette aventure de
                malade, tu vas apprendre à gérer une équipe, démarcher des entreprises, organiser des événements, et
                évidemment découvrir des personnes incroyables qui vont devenir ta famille. <br/><br/>
                On espère que les assos n’ont plus de secrets pour toi, et que t’es <span>motivé.e</span> pour faire vibrer le pôle à
                nos côtés !
            </p>
        </section>

        <section className="videoSection">
            <iframe
                src={data.allStrapiCommons.edges[3].node.urlVideo + "?autoplay=1&cc_load_policy=1&vq=hd720"}
                frameBorder="0"
                allow="accelerometer; picture-in-picture"
                allowFullScreen/>
        </section>
        <section className="discordSectionHome">
            <h2 className="bounce">
                Venez discuter!
            </h2>
            <p>
                Des membres des associations sont là pour répondre à vos questions <span>toute la journée</span>!
            </p>
            <Cta link="https://discord.gg/X77ztWs" className="buttonDiscord" content="discord.com/X77ztWs"/>
=======

                Et donc pour faire tourner toutes ces assos, on a besoin de TOI ! Rejoins-nous dans cette aventure de
                malade, tu vas apprendre à gérer une équipe, démarcher des entreprises, organiser des événements, et
                évidemment découvrir des personnes incroyables qui vont devenir ta famille. <br/><br/>

                On espère que les assos n’ont plus de secrets pour toi, et que t’es motivé.e pour faire vibrer le pôle à
                nos côtés !
            </p>
>>>>>>> 57af438063de5fe91ec1d2923a1f90269f541db5
        </section>
    </Layout>
)

<<<<<<< HEAD
export const pageQuery = graphql`
query homeData {
  allStrapiCommons {
    edges {
      node {
        urlVideo
      }
    }
  }
}
`

export default IndexPage


=======
export default IndexPage
>>>>>>> 57af438063de5fe91ec1d2923a1f90269f541db5

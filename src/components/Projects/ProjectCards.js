import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Img from './c031c6.jpeg';
import Captor from './temp-sensor.png';
import Transmission from './transmission.jpg';
import Oscillo from './oscillo.png';
import {DiZend} from "react-icons/di";
import {SiSignal,SiStmicroelectronics,SiEditorconfig,SiYoutube,SiBigbluebutton,SiStyledcomponents,SiDiscover,SiSchneiderelectric} from "react-icons/si";
import {DiTerminal} from "react-icons/di";
import ReactPlayer from "react-player";
import './ProjectCards.css';

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link then, it will render the below component  */}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          {/* Add your new button here */}
          <Button
            variant="primary"
            onClick={handleShowModal}
            style={{ marginLeft: "10px" }}
          >
            {"Voir plus"}
          </Button>
        </Card.Body>
      </Card>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton >
              <Modal.Title style={{ textAlign: "center" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <VerticalTimeline lineColor='gray'>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'gray', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiSchneiderelectric />}
                  >
                    <h3 className="vertical-timeline-element-title">Stage #1</h3>
                    <h4 className="vertical-timeline-element-subtitle">Schneider Electric</h4>
                    <p>
                      Stage de developpement sur des micro-controleur de chez STMicroElectronics sur l'ide Stm32CubeIde avec des cartes de type Nucleo
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09/05/2023 - 16/05/2023"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiDiscover />}
                  >
                    <h3 className="vertical-timeline-element-title">Découverte</h3>
                    <h4 className="vertical-timeline-element-subtitle">Outils, matériel</h4>
                    <p>
                      Découverte de l'entreprise, des outils et du matériel utilisé. Mise en place de la première carte de développement avec différents test.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiStmicroelectronics />}
                  >
                    <h3 className="vertical-timeline-element-title">Première carte</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Img} alt="mon image" />
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="16/05/2023 - 23/05/2023"
                    icon={<SiStyledcomponents />}
                  >
                    <h3 className="vertical-timeline-element-title">Premiers Projets</h3>
                    <h4 className="vertical-timeline-element-subtitle">Parametrage de la led</h4>
                    <p>
                      Mes premiers projets étaient relativement simple, il s'agissait de parametrer la led de la carte en la faisant clignoter. On m'a dit qu'il y avait plusieurs façon de le faire et donc de les experimentés.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiYoutube />}
                  >
                    <h3 className="vertical-timeline-element-title">Clignotement de la led</h3>
                    <p>
                      <ReactPlayer url = "https://www.youtube.com/shorts/9twumN_EmKA" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="23/05/2023 - 30/05/2023"
                    icon={<SiBigbluebutton />}
                  >
                    <h3 className="vertical-timeline-element-title">Insertion des boutons</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boutons Reset et Push</h4>
                    <p>
                      Mise en place des boutons push et reset sur la carte, et parametrage de ceux-ci pour intéragir avec la led.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiYoutube />}
                  >
                    <h3 className="vertical-timeline-element-title">Bouton push et reset</h3>
                    <p>
                      <ReactPlayer url = "https://www.youtube.com/shorts/Hkco_-mNeFA" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="30/05/2023 - 13/06/2023"
                    icon={<SiEditorconfig />}
                  >
                    <h3 className="vertical-timeline-element-title">Mise en place de capteurs</h3>
                    <h4 className="vertical-timeline-element-subtitle">Capteur de temperature</h4>
                    <p>
                      Mise en place d'un capteur de temperature sur la carte, et parametrage de celui-ci pour intéragir avec la led.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiEditorconfig />}
                  >
                    <h3 className="vertical-timeline-element-title">Parametrage</h3>
                    <p>
                    <img src={Captor} alt="sensor" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    date="13/06/2023 - 30/06/2023"
                    icon={<DiTerminal />}
                  >
                    <h3 className="vertical-timeline-element-title">Communication entre les deux cartes.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Création et transmition de signal</h4>
                    <p>
                      Branchement des deux cartes nucleo entre elles. Puis génération de signal sinus complet ou demi-alternance positive puis transmition de celui-ci à la deuxième carte.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiStmicroelectronics />}
                  >
                    <h3 className="vertical-timeline-element-title">Mes branchements</h3>
                    <p>
                    <img src={Transmission} alt="sensor" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<SiSignal />}
                  >
                    <h3 className="vertical-timeline-element-title">Exemple de signal généré</h3>
                    <p>
                    <img src={Oscillo} alt="sensor" width={'110%'}/>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'gray', color: '#fff' }}
                    icon={<DiZend />}
                  >
                    <h3 className="vertical-timeline-element-title">Remerciements</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fin de stage</h4>
                    <p>
                      Merci à toute l'équipe de Schneider Electric pour ce stage, et pour m'avoir permis de découvrir le monde du developpement embarqué. J'ai été très bien accueilli et j'ai pu apprendre beaucoup de choses.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </Modal.Body>
          </Modal>
        </>
  );
}

export default ProjectCards;

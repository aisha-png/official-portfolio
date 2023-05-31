import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import "../styles/Projects.css";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {

    const projects = (
       {
        title: "Pokemon Project",
        description: "Frontend Development",
        imgUrl: projImg1,
       }, 
       {
        title: "Banking API",
        description: "Backend-project",
        imgUrl: projImg2,
       }, 
       {
        title: "Animu",
        description: "Full Stack Project",
        imgUrl: projImg3,
       },
       {
        title: "Pokemon Project",
        description: "Frontend Development",
        imgUrl: projImg1,
       }, 
       {
        title: "Banking API",
        description: "Backend-project",
        imgUrl: projImg2,
       }, 
       {
        title: "Animu",
        description: "Full Stack Project",
        imgUrl: projImg3,
       } 
    )

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                   
                </Row>
            </Container>
            <Container>
                <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
                    <Tab eventKey="home" title="Home">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="longer-tab" title="Loooonger Tab">
                        Tab content for Loooonger Tab
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </Container>
            
        </section>
    )
}
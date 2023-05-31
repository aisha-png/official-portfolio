import { Container, Row } from "react-bootstrap";
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
                    <h1>Hello from projects</h1>
                </Row>
            </Container>
        </section>
    )
}
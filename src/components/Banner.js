import '../styles/Banner.css';
import {useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import astraunaut from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Back-end Developer", "Full Stack Developer"];
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100); /* how fast one letter comes after the first one is typed*/
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick= () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-cetre">
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className="tagline">Welcome to my Portfolio</span> */}
                        <span className='banner-title-fix'>
                            <h4>{`Hello there 👋,`}</h4>
                            <h1 className='my-name'>{`I'm Aisha`}</h1>
                            {/* <h2><span className="wrap" dataPeriod="1000">{text}</span></h2>   */}
                        </span>
            
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <span className='banner-text'>
                            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                        </span>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={astraunaut} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
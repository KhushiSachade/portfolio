import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaBrain, FaUsers, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} data-aos="fade-right">
              <div className="hero-content">
                <h1 className="mb-4">
                  Hi, I'm <span className="gradient-text">Khushi Sachade</span>
                </h1>
                <p className="lead mb-4">
                  A passionate Software Developer, Product Manager, and AI Enthusiast crafting innovative solutions 
                  that bridge technology and business value. I specialize in full-stack development, AI integration, 
                  and building scalable products that make a difference.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button 
                    as={Link} 
                    to="/projects" 
                    size="lg" 
                    className="btn-primary"
                  >
                    View My Work <FaArrowRight className="ms-2" />
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-light" 
                    size="lg"
                  >
                    Let's Connect
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="text-center">
                <div className="hero-illustration">
                  <FaCode size={120} className="opacity-75" style={{ color: '#EBCFC4' }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Highlights Section */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-4 mb-3">What I Bring to the Table</h2>
              <p className="lead text-muted">
                A unique blend of technical expertise, product thinking, and AI innovation
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <FaCode size={48} className="text-primary" />
                  </div>
                  <Card.Title className="h5 mb-3">Full-Stack Development</Card.Title>
                  <Card.Text className="text-muted">
                    Expertise in React, Node.js, Python, and modern web technologies. 
                    Building scalable, performant applications with clean architecture.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <FaBrain size={48} className="text-primary" />
                  </div>
                  <Card.Title className="h5 mb-3">AI & Machine Learning</Card.Title>
                  <Card.Text className="text-muted">
                    Deep understanding of NLP, data science, and AI integration. 
                    Building intelligent solutions that learn and adapt.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <FaUsers size={48} className="text-primary" />
                  </div>
                  <Card.Title className="h5 mb-3">Product Management</Card.Title>
                  <Card.Text className="text-muted">
                    Strategic thinking, user-centric design, and business acumen. 
                    Turning complex problems into elegant, market-ready solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Stats Section */}
      <section className="section">
        <Container>
          <Row className="g-4 text-center">
            <Col md={3} data-aos="fade-up" data-aos-delay="100">
              <div className="stat-item">
                <h3 className="display-4 text-primary mb-2">4.0</h3>
                <p className="text-muted">GPA - MS in IT</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item">
                <h3 className="display-4 text-primary mb-2">15+</h3>
                <p className="text-muted">Projects Completed</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="300">
              <div className="stat-item">
                <h3 className="display-4 text-primary mb-2">3+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <h3 className="display-4 text-primary mb-2">100+</h3>
                <p className="text-muted">Students Mentored</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="display-5 mb-4">Ready to Build Something Amazing?</h2>
              <p className="lead mb-4">
                Let's collaborate on innovative projects that push the boundaries of technology
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                size="lg" 
                variant="light"
                className="px-5"
              >
                Get In Touch <FaRocket className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

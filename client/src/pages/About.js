import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaHeart, FaGlobe, FaUsers } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="section bg-light" style={{ paddingTop: '120px' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">About Me</h1>
              <p className="lead text-muted">
                Passionate technologist, lifelong learner, and advocate for innovation
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Personal Story Section */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 mb-4">My Journey</h2>
              <p className="lead mb-4">
                From a curious computer engineering student in Gujarat, India, to a graduate student at Arizona State University, 
                my journey has been driven by an insatiable curiosity for technology and its potential to solve real-world problems.
              </p>
              <p className="mb-4">
                I believe that great software isn't just about clean code—it's about understanding the human experience, 
                anticipating user needs, and creating solutions that make a meaningful impact. This philosophy has guided me 
                through every project, from building e-commerce platforms to developing AI-powered tools.
              </p>
              <p>
                When I'm not coding or studying, you'll find me exploring new technologies, mentoring fellow students, 
                or contributing to open-source projects. I'm passionate about building bridges between academia and industry, 
                and I love connecting with like-minded professionals who share my enthusiasm for innovation.
              </p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="text-center">
                <div className="about-illustration mb-4">
                  <FaLaptopCode size={120} className="opacity-75" style={{ color: '#98C9DC' }} />
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="text-primary mb-1">4.0</h4>
                      <small className="text-muted">MS GPA</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="text-primary mb-1">9.3</h4>
                      <small className="text-muted">BS GPA</small>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">What Drives Me</h2>
              <p className="lead text-muted">
                Core principles that guide my work and decision-making
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <FaLightbulb size={48} className="text-primary" />
                  </div>
                  <Card.Title className="h5 mb-3">Innovation First</Card.Title>
                  <Card.Text className="text-muted">
                    I constantly seek new ways to solve problems, whether through emerging technologies, 
                    creative approaches, or unconventional thinking.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <FaHeart size={48} className="text-primary" />
                  </div>
                  <Card.Title className="h5 mb-3">User-Centric Design</Card.Title>
                  <Card.Text className="text-muted">
                    Every solution I build starts with understanding the user's needs and pain points. 
                    Great products solve real problems elegantly.
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
                  <Card.Title className="h5 mb-3">Collaboration</Card.Title>
                  <Card.Text className="text-muted">
                    I believe the best solutions come from diverse perspectives and collaborative effort. 
                    Building bridges between teams and disciplines is key to success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Education Highlights */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Academic Excellence</h2>
              <p className="lead text-muted">
                My educational journey has been marked by consistent achievement and continuous growth
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FaGraduationCap size={32} className="text-primary me-3" />
                    <div>
                      <h5 className="mb-1">Masters of Science in Information Technology</h5>
                      <p className="text-muted mb-0">Arizona State University</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Badge bg="success" className="me-2">GPA: 4.0/4.0</Badge>
                    <Badge bg="info">2023-2025</Badge>
                  </div>
                  <p className="mb-3">
                    Specialized in cutting-edge technologies including Data Visualization, Cloud Architecture, 
                    Big Data Analytics, Advanced Database Management Systems, Natural Language Processing, 
                    and Middleware Programming.
                  </p>
                  <div className="d-flex flex-wrap gap-1">
                    <Badge bg="light" text="dark" className="me-1 mb-1">Data Visualization</Badge>
                    <Badge bg="light" text="dark" className="me-1 mb-1">Cloud Architecture</Badge>
                    <Badge bg="light" text="dark" className="me-1 mb-1">Big Data</Badge>
                    <Badge bg="light" text="dark" className="me-1 mb-1">NLP</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6} data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <FaGraduationCap size={32} className="text-primary me-3" />
                    <div>
                      <h5 className="mb-1">Bachelors of Technology in Computer Engineering</h5>
                      <p className="text-muted mb-0">Gujarat Technological University</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Badge bg="success" className="me-2">GPA: 9.3/10.0</Badge>
                    <Badge bg="info">2018-2022</Badge>
                  </div>
                  <p className="mb-3">
                    Built a strong foundation in computer science fundamentals including Data Structures, 
                    Web Development, Artificial Intelligence, Machine Learning, and Operating Systems.
                  </p>
                  <div className="d-flex flex-wrap gap-1">
                    <Badge bg="light" text="dark" className="me-1 mb-1">Data Structures</Badge>
                    <Badge bg="light" text="dark" className="me-1 mb-1">Web Development</Badge>
                    <Badge bg="light" text="dark" className="me-1 mb-1">AI/ML</Badge>
                    <Badge bg="light" text="dark" className="me-1 mb-1">OS</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Personal Interests */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Beyond the Code</h2>
              <p className="lead text-muted">
                What keeps me inspired and balanced
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={3} data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <FaGlobe size={48} className="text-primary mb-3" />
                <h5>Global Perspective</h5>
                <p className="text-muted">Having studied and worked in both India and the US, I bring diverse cultural insights to every project.</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <FaUsers size={48} className="text-primary mb-3" />
                <h5>Mentorship</h5>
                <p className="text-muted">I love sharing knowledge and helping others grow. Teaching has taught me as much as learning.</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <FaLightbulb size={48} className="text-primary mb-3" />
                <h5>Problem Solving</h5>
                <p className="text-muted">I enjoy tackling complex challenges and finding elegant solutions that others might miss.</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <FaHeart size={48} className="text-primary mb-3" />
                <h5>Community</h5>
                <p className="text-muted">Building bridges between academia and industry, fostering connections that drive innovation.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;

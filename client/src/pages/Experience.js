import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaAward, FaRocket, FaUsers, FaCode, FaCloud, FaDatabase, FaBrain } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="experience-page">
      {/* Hero Section */}
      <section className="section bg-light" style={{ paddingTop: '120px' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">Experience & Education</h1>
              <p className="lead text-muted">
                My professional journey and academic achievements
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Professional Experience */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Professional Experience</h2>
              <p className="lead text-muted">
                From software development to product management, each role has shaped my expertise
              </p>
            </Col>
          </Row>
          
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-content">
                <div className="d-flex align-items-center mb-3">
                  <FaBriefcase size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-1">Full Stack Software Developer</h5>
                    <p className="text-muted mb-0">Software Architech Inc</p>
                  </div>
                </div>
                <div className="mb-3">
                  <Badge bg="success" className="me-2">July 2025 - Present</Badge>
                  <Badge bg="info">Remote, USA</Badge>
                </div>
                <p className="mb-3">
                  Leading the development of a multi-tenant portal using React, Node.js, and MongoDB. 
                  Designing RESTful APIs with AWS Lambda and integrating AI features for personalized user insights. 
                  Setting up CI/CD pipelines with GitHub Actions and Docker for faster, more reliable releases.
                </p>
                <div className="d-flex flex-wrap gap-1">
                  <Badge bg="light" text="dark" className="me-1 mb-1">React</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Node.js</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">MongoDB</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">AWS Lambda</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Docker</Badge>
                </div>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div className="timeline-content">
                <div className="d-flex align-items-center mb-3">
                  <FaUsers size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-1">Graduate Teaching Assistant</h5>
                    <p className="text-muted mb-0">Arizona State University</p>
                  </div>
                </div>
                <div className="mb-3">
                  <Badge bg="success" className="me-2">Dec 2023 - May 2025</Badge>
                  <Badge bg="info">Arizona, USA</Badge>
                </div>
                <p className="mb-3">
                  Supporting 100+ students in implementing secure system architecture and evaluating data protection measures. 
                  Guiding practical labs, reinforcing understanding of encryption, infrastructure security, and secure design patterns.
                </p>
                <div className="d-flex flex-wrap gap-1">
                  <Badge bg="light" text="dark" className="me-1 mb-1">Security Architecture</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Encryption</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Infrastructure Security</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Mentorship</Badge>
                </div>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div className="timeline-content">
                <div className="d-flex align-items-center mb-3">
                  <FaCode size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-1">Software Engineer</h5>
                    <p className="text-muted mb-0">Communication Crafts</p>
                  </div>
                </div>
                <div className="mb-3">
                  <Badge bg="success" className="me-2">Dec 2022 - Jul 2023</Badge>
                  <Badge bg="info">Gujarat, India</Badge>
                </div>
                <p className="mb-3">
                  Engineered scalable web applications using ReactJS, enhancing functionality with 5+ libraries and accelerating delivery by 15%. 
                  Improved performance by 20% and lowered latency by 50% via advanced state management and streamlined API integration.
                </p>
                <div className="d-flex flex-wrap gap-1">
                  <Badge bg="light" text="dark" className="me-1 mb-1">ReactJS</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Performance Optimization</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">API Integration</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">State Management</Badge>
                </div>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
              <div className="timeline-content">
                <div className="d-flex align-items-center mb-3">
                  <FaRocket size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-1">Web Development Intern</h5>
                    <p className="text-muted mb-0">Brainybeam Technologies Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="mb-3">
                  <Badge bg="success" className="me-2">Jan 2022 - Apr 2022</Badge>
                  <Badge bg="info">Gujarat, India</Badge>
                </div>
                <p className="mb-3">
                  Built a Django-based rental management system with responsive UI and backend automation. 
                  Achieved a 25% increase in data processing speed and ensured cross-platform compatibility.
                </p>
                <div className="d-flex flex-wrap gap-1">
                  <Badge bg="light" text="dark" className="me-1 mb-1">Django</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Python</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Responsive UI</Badge>
                  <Badge bg="light" text="dark" className="me-1 mb-1">Automation</Badge>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Education Section */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Educational Journey</h2>
              <p className="lead text-muted">
                Academic excellence and continuous learning
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
                    <Badge bg="info">Aug 2023 - May 2025</Badge>
                  </div>
                  <p className="mb-3">
                    Specialized in cutting-edge technologies and methodologies that prepare for leadership roles in tech.
                  </p>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaDatabase className="text-primary me-2" />
                        <span className="small">Data Visualization</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaCloud className="text-primary me-2" />
                        <span className="small">Cloud Architecture</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaRocket className="text-primary me-2" />
                        <span className="small">Big Data</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaCode className="text-primary me-2" />
                        <span className="small">NLP</span>
                      </div>
                    </div>
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
                    <Badge bg="info">Aug 2018 - May 2022</Badge>
                  </div>
                  <p className="mb-3">
                    Built a strong foundation in computer science fundamentals and practical application.
                  </p>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaCode className="text-primary me-2" />
                        <span className="small">Data Structures</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaRocket className="text-primary me-2" />
                        <span className="small">Web Development</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaBrain className="text-primary me-2" />
                        <span className="small">AI/ML</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <FaDatabase className="text-primary me-2" />
                        <span className="small">Operating Systems</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Certifications & Achievements</h2>
              <p className="lead text-muted">
                Professional development and recognition
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <FaAward size={48} className="text-primary mb-3" />
                  <Card.Title className="h5 mb-3">Google Data Analytics</Card.Title>
                  <Card.Text className="text-muted">
                    Prepare Data for Exploration, Ask Questions to Make Data-Driven Decisions, 
                    Foundations: Data, Everywhere
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <FaCloud size={48} className="text-primary mb-3" />
                  <Card.Title className="h5 mb-3">AWS Academy Cloud Architecting</Card.Title>
                  <Card.Text className="text-muted">
                    Comprehensive understanding of AWS cloud architecture, 
                    best practices, and implementation strategies
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <FaUsers size={48} className="text-primary mb-3" />
                  <Card.Title className="h5 mb-3">IEEE Leadership</Card.Title>
                  <Card.Text className="text-muted">
                    Directed 10+ cross-functional events for 200+ members, 
                    driving 40% increase in participation
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Skills Summary */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Core Competencies</h2>
              <p className="lead text-muted">
                Technical expertise across multiple domains
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={3} data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <FaCode size={48} className="text-primary mb-3" />
                <h5>Frontend Development</h5>
                <p className="text-muted">React, JavaScript, TypeScript, HTML, CSS</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <FaDatabase size={48} className="text-primary mb-3" />
                <h5>Backend & Databases</h5>
                <p className="text-muted">Node.js, Python, Django, SQL, MongoDB</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <FaCloud size={48} className="text-primary mb-3" />
                <h5>Cloud & DevOps</h5>
                <p className="text-muted">AWS, Docker, Git, CI/CD, REST APIs</p>
              </div>
            </Col>
            <Col md={3} data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <FaBrain size={48} className="text-primary mb-3" />
                <h5>AI & Analytics</h5>
                <p className="text-muted">Machine Learning, NLP, Data Visualization, Tableau</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Experience;

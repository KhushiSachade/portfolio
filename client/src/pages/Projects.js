import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaDatabase, FaChartBar, FaRobot, FaShoppingCart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Cold Email Generation Tool",
      description: "An AI-powered tool that revolutionizes job application targeting by using LangChain and vector retrieval to automate personalized outreach emails. The system leverages LLM-based semantic matching to improve targeting accuracy by 30%.",
      longDescription: "This innovative tool addresses the challenge of crafting personalized job application emails at scale. By integrating LangChain framework with advanced vector retrieval systems, it analyzes job descriptions and candidate resumes to generate highly targeted, personalized outreach messages. The system uses semantic matching algorithms to ensure optimal alignment between candidate skills and job requirements, significantly improving response rates and application success.",
      technologies: ["Python", "LangChain", "LLM (Llama)", "ChromaDB", "OpenAI", "Vector Retrieval"],
      category: "AI/ML",
      icon: FaRobot,
      github: "https://github.com/KhushiSachade",
      live: "#",
      impact: "30% improvement in job application targeting",
      challenges: "Integration of multiple AI models, vector database optimization",
      solutions: "Modular architecture, efficient vector indexing, semantic similarity algorithms"
    },
    {
      id: 2,
      title: "Virtual Cart App",
      description: "A comprehensive full-stack eCommerce platform built with React and JavaScript, featuring optimized performance and 25% faster load times through advanced state management and API optimization.",
      longDescription: "This eCommerce solution represents a complete digital shopping experience, from product browsing to checkout completion. The platform incorporates advanced features like real-time inventory management, personalized product recommendations, secure payment processing, and comprehensive order tracking. The responsive design ensures seamless user experience across all devices, while the optimized backend architecture handles high traffic loads efficiently.",
      technologies: ["React", "JavaScript", "REST API", "Node.js", "MongoDB", "Redux"],
      category: "Web Development",
      icon: FaShoppingCart,
      github: "https://github.com/KhushiSachade",
      live: "#",
      impact: "25% faster load times, improved user engagement",
      challenges: "Performance optimization, real-time updates, scalable architecture",
      solutions: "Lazy loading, efficient state management, optimized API endpoints"
    },
    {
      id: 3,
      title: "School Performance Analysis in Phoenix",
      description: "A data science project that achieved 97% accuracy in training classification models on academic data from 200+ schools, providing actionable insights for educational policy decisions.",
      longDescription: "This comprehensive educational analytics project analyzes performance patterns across Phoenix school districts to identify factors contributing to academic success and areas needing improvement. The system processes diverse datasets including test scores, attendance records, demographic information, and resource allocation data. The resulting insights have directly influenced policy revisions for under-performing districts, demonstrating the real-world impact of data-driven decision making in education.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "Data Science",
      icon: FaChartBar,
      github: "https://github.com/KhushiSachade",
      live: "#",
      impact: "97% model accuracy, influenced policy revisions",
      challenges: "Data quality issues, feature engineering, model interpretability",
      solutions: "Robust data preprocessing, ensemble methods, explainable AI techniques"
    },
    {
      id: 4,
      title: "EV Management Database System",
      description: "A sophisticated relational database system designed for managing 10K+ electric vehicles, 100+ charging stations, and maintenance workflows, increasing operational uptime by 15%.",
      longDescription: "This enterprise-grade database system manages the complete lifecycle of electric vehicle operations, from vehicle registration and maintenance scheduling to charging infrastructure management and energy consumption analytics. The system implements predictive maintenance algorithms, real-time monitoring dashboards, and automated workflow triggers that streamline operations and reduce downtime. The normalized schema design ensures data integrity while supporting complex queries for business intelligence and reporting.",
      technologies: ["SQL", "Database Design", "Relational Schema", "Triggers", "Stored Procedures"],
      category: "Database Systems",
      icon: FaDatabase,
      github: "https://github.com/KhushiSachade",
      live: "#",
      impact: "15% increase in operational uptime",
      challenges: "Complex data relationships, performance optimization, scalability",
      solutions: "Normalized schema design, indexed queries, partitioned tables"
    },
    {
      id: 5,
      title: "Sleep Health & Lifestyle Dashboard",
      description: "A comprehensive health analytics platform that models multi-source behavioral health data, creating interactive dashboards for public health teams to track anomalies across age and activity brackets.",
      longDescription: "This public health analytics platform integrates data from multiple sources including wearable devices, health surveys, and medical records to provide comprehensive insights into sleep patterns and lifestyle factors. The system employs advanced data modeling techniques to identify correlations between sleep quality, physical activity, and demographic factors. The interactive dashboards enable public health professionals to identify trends, detect anomalies, and develop targeted intervention strategies for different population segments.",
      technologies: ["Python", "Tableau", "Data Modeling", "Health Analytics", "Interactive Dashboards"],
      category: "Health Tech",
      icon: FaChartBar,
      github: "https://github.com/KhushiSachade",
      live: "#",
      impact: "Improved public health insights, targeted interventions",
      challenges: "Data privacy, multi-source integration, real-time processing",
      solutions: "HIPAA-compliant architecture, ETL pipelines, streaming analytics"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C", "HTML/CSS"] },
    { category: "Frontend Technologies", items: ["React", "React Native", "Vue.js", "Bootstrap", "Material-UI", "Redux"] },
    { category: "Backend Technologies", items: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot", "FastAPI"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "ChromaDB"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Terraform"] },
    { category: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "LangChain"] },
    { category: "Data & Analytics", items: ["Pandas", "NumPy", "Tableau", "Power BI", "Apache Spark", "Databricks"] },
    { category: "Tools & Platforms", items: ["VS Code", "PyCharm", "Postman", "Jupyter", "GitHub", "Figma"] }
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="section bg-light" style={{ paddingTop: '120px' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">Projects & Skills</h1>
              <p className="lead text-muted">
                Showcasing innovative solutions and technical expertise
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Featured Projects</h2>
              <p className="lead text-muted">
                A showcase of my technical capabilities and problem-solving approach
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={6} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-100 project-card border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <project.icon size={32} className="me-3" style={{ color: '#6AAE9E' }} />
                      <div>
                        <h5 className="mb-1">{project.title}</h5>
                        <Badge bg="primary" className="me-2">{project.category}</Badge>
                      </div>
                    </div>
                    
                    <p className="mb-3">{project.description}</p>
                    
                    <div className="mb-3">
                      <h6 className="mb-2">Key Impact:</h6>
                      <p className="text-muted small mb-2">{project.impact}</p>
                      
                      <h6 className="mb-2">Technologies Used:</h6>
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} bg="light" text="dark" className="me-1 mb-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="d-flex gap-2">
                      <Button 
                        href={project.github} 
                        target="_blank" 
                        variant="outline-primary" 
                        size="sm"
                        className="flex-fill"
                      >
                        <FaGithub className="me-2" />
                        View Code
                      </Button>
                      <Button 
                        href={project.live} 
                        target="_blank" 
                        variant="primary" 
                        size="sm"
                        className="flex-fill"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technical Skills */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">Technical Skills</h2>
              <p className="lead text-muted">
                Comprehensive expertise across multiple technology domains
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {skills.map((skillGroup, index) => (
              <Col md={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h5 className="mb-3 text-primary">{skillGroup.category}</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Project Development Process */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 mb-3">My Development Approach</h2>
              <p className="lead text-muted">
                How I approach complex technical challenges
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={3} data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaCode size={32} />
                </div>
                <h5>Research & Planning</h5>
                <p className="text-muted">Deep understanding of requirements, user needs, and technical constraints</p>
              </div>
            </Col>
            
            <Col md={3} data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaBrain size={32} />
                </div>
                <h5>Architecture Design</h5>
                <p className="text-muted">Scalable, maintainable solutions with clean separation of concerns</p>
              </div>
            </Col>
            
            <Col md={3} data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaDatabase size={32} />
                </div>
                <h5>Implementation</h5>
                <p className="text-muted">Clean, efficient code with comprehensive testing and documentation</p>
              </div>
            </Col>
            
            <Col md={3} data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaChartBar size={32} />
                </div>
                <h5>Optimization</h5>
                <p className="text-muted">Performance tuning, user experience refinement, and continuous improvement</p>
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
              <h2 className="display-5 mb-4">Interested in Collaborating?</h2>
              <p className="lead mb-4">
                Let's work together on innovative projects that push technological boundaries
              </p>
              <Button 
                href="/contact" 
                variant="light" 
                size="lg"
                className="px-5"
              >
                Let's Connect
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;

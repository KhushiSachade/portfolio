import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "ksachade203@gmail.com",
      link: "mailto:ksachade203@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+1 602-388-3663",
      link: "tel:+16023883663"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Tempe, AZ, USA",
      link: "#"
    },
    {
      icon: FaGlobe,
      title: "Website",
      value: "Portfolio",
      link: "/"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      url: "https://linkedin.com/in/khushi-sachade",
      color: "#0077b5"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      url: "https://github.com/KhushiSachade",
      color: "#333"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="section bg-light" style={{ paddingTop: '120px' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">Let's Connect</h1>
              <p className="lead text-muted">
                Ready to collaborate on innovative projects? I'd love to hear from you!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <Container>
          <Row className="g-5">
            {/* Contact Information */}
            <Col lg={5} data-aos="fade-right">
              <div className="mb-5">
                <h2 className="display-6 mb-4">Get In Touch</h2>
                <p className="lead mb-4">
                  I'm always interested in hearing about new opportunities, 
                  interesting projects, or just connecting with fellow tech enthusiasts. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'll try my best to get back to you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="mb-5">
                <h4 className="mb-4">Contact Information</h4>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h6 className="mb-1">{info.title}</h6>
                        <a 
                          href={info.link} 
                          className="text-decoration-none text-muted"
                          target={info.title === "Website" ? "_self" : "_blank"}
                          rel={info.title === "Website" ? undefined : "noopener noreferrer"}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-4">Connect With Me</h4>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ backgroundColor: social.color }}
                      title={social.title}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={7} data-aos="fade-left">
              <Card className="contact-form border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Send Me a Message</h3>
                  
                  {submitStatus === 'success' && (
                    <Alert variant="success" className="mb-4">
                      <Alert.Heading>Message Sent Successfully!</Alert.Heading>
                      <p>
                        Thank you for reaching out! I'll get back to you as soon as possible.
                      </p>
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert variant="danger" className="mb-4">
                      <Alert.Heading>Oops! Something went wrong.</Alert.Heading>
                      <p>
                        There was an error sending your message. Please try again or reach out directly via email.
                      </p>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Additional Information */}
      <section className="section bg-light">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="display-5 mb-4">What Happens Next?</h2>
              <p className="lead text-muted mb-5">
                Here's what you can expect when you reach out
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaEnvelope size={32} />
                </div>
                <h5>Quick Response</h5>
                <p className="text-muted">
                  I typically respond within 24 hours during weekdays. 
                  I'll acknowledge your message and ask any clarifying questions.
                </p>
              </div>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaGlobe size={32} />
                </div>
                <h5>Discussion & Planning</h5>
                <p className="text-muted">
                  We'll discuss your project requirements, timeline, and goals. 
                  I'll provide insights and suggestions based on my experience.
                </p>
              </div>
            </Col>
            
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaPaperPlane size={32} />
                </div>
                <h5>Next Steps</h5>
                <p className="text-muted">
                  Based on our discussion, we'll outline the next steps, 
                  whether it's a proposal, project kickoff, or continued collaboration.
                </p>
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
              <h2 className="display-5 mb-4">Ready to Start Something Amazing?</h2>
              <p className="lead mb-4">
                Let's turn your ideas into reality with innovative technology solutions
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button 
                  href="mailto:ksachade203@gmail.com" 
                  variant="light" 
                  size="lg"
                  className="px-4"
                >
                  <FaEnvelope className="me-2" />
                  Email Me Directly
                </Button>
                <Button 
                  href="https://linkedin.com/in/khushi-sachade" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-light" 
                  size="lg"
                  className="px-4"
                >
                  <FaLinkedin className="me-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

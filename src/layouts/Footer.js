// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = (): React$Element<any> => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    {/*<Col md={6}>{currentYear} © Flendzz Technologies (P) Ltd</Col>*/}
                    <Col md={6}> Flendzz Technologies (P) Ltd </Col>

                    <Col md={6}>
                        <div className="text-md-end footer-links d-none d-md-block">
							© 2016-2018 All Rights Reserved
                            {/*<Link to="#">About</Link>*/}
                            {/*<Link to="#">Support</Link>*/}
                            {/*<Link to="#">Contact Us</Link>*/}
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
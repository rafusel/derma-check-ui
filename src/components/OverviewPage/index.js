import { Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import Glasses from '../../assets/glasses.jpg';
import Measure from '../../assets/measure.jpg';
import Paper from '../../assets/paper.jpg';
import './styles.css';

export default function OverviewPage(props) {
  return (
    <Fragment>
      <Button type="primary" style={{
        width: '300px',
        height: '75px',
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        zIndex: '10000',
        fontSize: '30px'
      }}>
        <Link to="/measure">
          Get Started!
        </Link>
      </Button>

      <Row className="w-100" align="middle">
        <Col span={16}>
          <img src={Glasses} className="w-100" alt="A pair of glasses."/>
        </Col>
        <Col span={8} className="padding-for-text">
          <h2>
            Opticus Cares
          </h2>
          <p>Glasses: 75% of people need them, but how many own a comfortable pair? The pain felt from a long day of glasses wearing is one all too familiar. That's where Opticus comes in; our well-honed software needs only a piece of paper &#8212; along with your beautiful face &#8212; to determine the perfect fit for your glasses! </p>
        </Col>
      </Row>

      <Row className="w-100" align="middle">
        <Col span={8} className="padding-for-text">
          <h2>
            The Math
          </h2>
          <p>With just the picture you submit, Opticus is able to determine your nose bridge width and temple-to-temple length, and uses them to calculate your lens width and arm length, along with all the other measurements needed to get you your best fitting pair of glasses yet!</p>
        </Col>
        <Col span={16}>
          <img src={Measure} className="w-100" alt="Drafting instruments on a table."/>
        </Col>
      </Row>

      <Row className="w-100" align="middle">
        <Col span={16}>
          <img src={Paper} className="w-100" alt="Pieces of paper."/>
        </Col>
        <Col span={8} className="padding-for-text">
          <h2>
            Paper Details
          </h2>
          <p>Opticus likes to work with the best, so to do its magic it requires standard A4 (8.5 x 11in) paper; the most venerated of papers. When taking your picture make sure to follow the instructions to get the most accurate results possible!</p>
        </Col>

      </Row>
    </Fragment>
  );
}
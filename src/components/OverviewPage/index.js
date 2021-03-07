import { Fragment } from 'react';
import { Row, Col } from 'antd';
import Glasses from '../../assets/glasses.jpg';
import Measure from '../../assets/measure.jpg';
import Paper from '../../assets/paper.jpg';
import './styles.css';

export default function OverviewPage(props) {
  return (
    <Fragment>
      <Row className="w-100" align="middle">
        <Col span={16}>
          <img src={Glasses} className="w-100" alt="A pair of glasses."/>
        </Col>
        <Col span={8} className="padding-for-text">
          <h2>
            Blah Blah Blah
          </h2>
          <p>Lorem ipsum sjdnvlkjs ksjdnvlkj sdlvkjsdkvj skdj vlksjd vlkjsnbdvlkj slkjdv lksdjnvkj sdkjvbsdlkj vlksjdb </p>
        </Col>
      </Row>

      <Row className="w-100" align="middle">
        <Col span={8} className="padding-for-text">
          <h2>
            More blah
          </h2>
          <p>alkjbds skdjs dvlkj sdlkvjbslkd lksbdlkvslkh dbvkls dvlhsbdjkh sdkjvh sdkjv skjh vdkjs dvkj hsdvkjh sdkjvh sdjv hlsdk vlksdh vlshd vlj sdhvljh d</p>
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
            More blah
          </h2>
          <p>alkjbds skdjs dvlkj sdlkvjbslkd lksbdlkvslkh dbvkls dvlhsbdjkh sdkjvh sdkjv skjh vdkjs dvkj hsdvkjh sdkjvh sdjv hlsdk vlksdh vlshd vlj sdhvljh d</p>
        </Col>

      </Row>
    </Fragment>
  );
}
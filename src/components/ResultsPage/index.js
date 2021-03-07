import { Statistic, Row, Col } from 'antd';

export default function ResultsPage(props) {
  const getLensWidth = () => {
    return (props.templeWidth - props.noseBridgeWidth) / 2;
  }

  const getArmLength = () => {
    return 140;
  }

  return (
    <div style={{width: '100%', maxWidth: '70%', margin: 'auto', fontSize: '20px', marginBottom: '50px'}}>
      <h2 style={{marginTop: '50px'}}>
        Your face
      </h2>

      <Row align="middle">
        <Col span={12}>
          <Statistic title="Temple Width" value={props.templeWidth} suffix="mm" />
        </Col>

        <Col span={12}>
          <Statistic title="Nose Bridge Width" value={props.noseBridgeWidth} suffix="mm" />
        </Col>
      </Row>

      <h2 style={{marginTop: '50px'}}>
        Your computed glasses measurements
      </h2>

      <Row align="middle">
        <Col span={8}>
          <Statistic title="Glasses Width" value={props.templeWidth} suffix="mm" />
        </Col>

        <Col span={8}>
          <Statistic title="Lens Width" value={getLensWidth()} suffix="mm" />
        </Col>

        <Col span={8}>
          <Statistic title="Arm Length" value={getArmLength()} suffix="mm" />
        </Col>
      </Row>
    </div>
  );
}

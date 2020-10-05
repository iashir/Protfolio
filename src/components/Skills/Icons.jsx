import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Icon } from '@iconify/react';

const IconsMap = ({ icons, isDesktop, title }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} style={{ marginBottom: '3rem' }}>
        <h3>{title}</h3>
      </Col>
      {icons &&
        icons.map((data, i) => (
          <Col xs={4} md={2}>
            <Fade bottom="true" duration={1000} delay={500 + i * 200} distance="300px">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Icon
                  icon={data.icon}
                  width={isDesktop ? '6em' : '4em'}
                  height={isDesktop ? '6em' : '4em'}
                />
                <p style={{ marginTop: '1rem' }}>{data.name}</p>
              </div>
            </Fade>
          </Col>
        ))}
    </Row>
  );
};

export default IconsMap;

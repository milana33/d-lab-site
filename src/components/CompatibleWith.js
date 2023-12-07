
import {Col, Image, Row} from "antd";
import { useParallax } from 'react-scroll-parallax';

export const CompatibleWith = () => {

  const parallax = useParallax({
    scale: [0.5, 3, 'easeInQuad']
  });

  // const parallax = useParallax<HTMLDivElement>({
  //   rotateY: [0, 360],
  // });
  return (
      <>
        <div id='compatible'>
          <Row type="flex" justify="center">
            <Col xs={24} sm={12} md={10}><p className="text-center title">COMPATIBLE WITH</p>
            </Col>
          </Row>

          <Row>
            <Col xs={24}>
          <div ref={parallax.ref} className="spinner">
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/adbri.png"
                className="compatibility-image"
            />
            <div style={{marginRight: '20px'}}></div>
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/adjust.png"
                className="compatibility-image"
            />
            <div style={{marginRight: '20px'}}></div>
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/AppsFlyer.png"
                className="compatibility-image"

            />
            <div style={{marginRight: '20px'}}></div>
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/Branch.png"
                className="compatibility-image"
                style={{marginTop: '-12px'}}
            />
            <div style={{marginRight: '20px'}}></div>
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/kochava.png"
                className="compatibility-image"
            />
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/singular.png"
                className="compatibility-image"
            />
            <Image
                alt="compatibility" preview={false}
                src="/compatibility/SKAdNetwork.png"
                className="compatibility-image"
            />
        </div>
            </Col>
          </Row>
        </div>
      </>
  )
}

import {Col, Image, Row, Card} from 'antd'
export const Advertisers = () => {
  return (
      <>
      <Row type="flex" justify="center">
        <Col span={13}><p className="text-center title">ADVERTISERS / AGENCIES</p>
        </Col>
      </Row>
        <Row type="flex" justify="center">
          <Col span={6}>
            <Card title={<span className="card-title-shine">D-LAB Tracking Platform</span>}>
              <div style={{ fontSize: '13px', lineHeight: '1.45', marginTop: '-10px' }} className="card-description">In order to succeed in the ever-changing mobile user acquisition industry, we have developed a platform (tracker),
                that gives the necessary flexibility to the clients to help them define the traffic specifics that will suit their needs.
                We understand the importance of being able to adjust the technology to the market developments, and this is one of the most valuable assets of our platform.</div>
          </Card>
          </Col>
         <Col> <Image
             alt="advertisers" preview={false}
             src="/advertisers/adv-img.png"
             className="adv-img"
             width={550}
             style={{marginTop:'-37px'}}/>
         </Col>
          <Col span={6}>
            <Card title={<span className="card-title-shine">Setting Goals</span>}>
              <div className="card-description">  We help our clients set achievable goals per campaign in order to get
                the best results possible from the promotion of their apps. Setting clear KPIs, optimising the traffic while adapting to the market developments can be a key factor for successful campaigns and an increased user engagement.</div>
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={8}>
         <Card title={<span className="card-title-shine">User Acquisition Practices</span>}>
           <div className="card-description">   User acquisition, even though diverse and changing, still represents the
             core part of business growth. Therefore, having a platform that combines a smart tracker with user-friendly client interface is essential in the current market for being successful.</div>
            </Card>
          </Col>
        </Row>
      </>
  )
}

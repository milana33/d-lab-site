import {Avatar, Card, Col, Divider, Image, Row, Button} from "antd";
const { Meta } = Card;
export const SupplyPartners = () => {
  return (
      <>
        <Row type="flex" justify="center">
          <Col span={9}><p className="text-center title">SUPPLY PARTNERS</p>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={6}>
            <Card>
              <Meta
                  avatar={<Avatar src="/supply-partners/dsp-icon.png " />}
                  title={<span>DSP traffic</span>}
                  description= {
                    <span>
                    <Divider></Divider>
                  <div className="card-description" style={{ fontSize: '13px', lineHeight: '1.57', marginTop: '-10px' }}>If you are using DSPs for acquiring traffic and promoting apps, and
                    you are looking for good campaigns with good budgets, then you are in the right place. By using our
                    API integration, you will gain access to a vast variety of campaigns that require traffic, and you
                    will be able to use your media buying skills to get the best results.
</div>
                  </span>}/>
            </Card>
          </Col>
          <Col>
            <Image
                alt="suppliers" preview={false}
                src="/supply-partners/suppliers-img.png"
                width={550}
                style={{marginTop:'-37px'}}/>
          </Col>
          <Col span={6}>
            <Card>
              <Meta
                  avatar={<Avatar src="/supply-partners/app-icon.png" />}
                  title={<span>In-app traffic</span>}
                  description= {
                    <span>
                    <Divider></Divider>
                  <div className="card-description">If you have an app or a platform with apps and you are able to set
                    specific advertising banners or videos within those apps,
                    and you are looking for campaigns to use that ad space, reach out to us to discuss potential partnership opportunities.
</div>
                  </span>}/>
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Card
            >
              <Meta
                  avatar={<img src="/supply-partners/API-icon.svg" style={{width:'35px'}}/>}
                  description= {
                    <span>
                  <div className="card-description"> To better understand how our API works, please refer to the links
                    below that will help you in the first steps of the integration.</div></span>}/>
              <Row type="flex" justify="center">    <Button className="sbt-button" key={1}>API doc</Button></Row>
            </Card>
          </Col>
        </Row>
      </>
  )
}

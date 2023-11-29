import {Row, Col, Image, Card, Avatar} from "antd";

const { Meta } = Card;
export const Expertise = () => {
  return (
      <>
        <div id="expertise">
      <Row type="flex" justify="center">
      <Col span={5}><p className="text-center title">EXPERTISE</p>
      </Col>
      </Row>
        <Row type="flex" justify="center" gutter={[8, 8]}>
          <Col>
               <Card
                  style={{
                    width: 350
                  }}
                 cover={
                <Image
                    src="/expertise/swe-1.png"
                    preview={false}
                    className="swe-img"
                />
               }>
                 <Meta
                     avatar={<Avatar src="/expertise/traffic-icon.svg " />}
                     title="Traffic distribution system"
                     description="We value the effective use of data and we provide a great solution to our partners to track
                     and analyse the data regarding every offer promoted with our help.
                     Our smart system optimises audience targeting in real-time, maximises your ROI – while respecting user privacy."
                 />
               </Card>
          </Col>
          <Col>
            <Card
                style={{
                  width: 350
                }}
                cover={
                  <Image
                      src="/expertise/swe-2.png"
                      preview={false}
                      className="swe-img"
                  />
                }>
              <Meta
                  avatar={<Avatar src="/expertise/media-icon.svg " />}
                  title="Media formats"
                  description="Knowing the right user and their preferences is the essential part of a successful promotion.
                  We have direct access to all the major mobile display and rich media SSPs, which brings the best direct placements
                  for your audience making sure the client’s expectations are met."
              />
            </Card>
          </Col>
          <Col>
            <Card
                style={{
                  width: 350
                }}
                cover={
                  <Image
                      src="/expertise/swe-3.png"
                      preview={false}
                      className="swe-img"
                  />
                }>
              <Meta
                  avatar={<Avatar src="/expertise/audience-icon.svg " />}
                  title="User audiences and cohorts"
                  description="Running successful promotional campaigns always involves detailed planning, correct targeting
                  and most importantly, optimisation. Years of experience in the field of online advertisement, combined with
                  our innovative technology, help us stand out in terms of quality of the traffic."
              />
            </Card>
          </Col>
          <Col>
            <Card
                style={{
                  width: 350
                }}
                cover={
                  <Image
                      src="/expertise/swe-4.png"
                      preview={false}
                      className="swe-img"
                  />
                }>
              <Meta
                  avatar={<Avatar src="/expertise/insight-icon.svg " />}
                  title="In-depth insights"
                  description= {
                    <div style={{ fontSize: '13px', lineHeight: '1.49' }}>We provide insights regarding the traffic sources, their origin in terms of GEO location,
                  device types and applications used in order to promote the offers. This helps us and the advertisers
                  distinguish better the users, their needs and how to better serve them, hence creating a better user experience while promoting apps.
                    </div>} />
            </Card>
          </Col>
        </Row>
        </div>
      </>
  )
}

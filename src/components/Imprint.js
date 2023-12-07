import {Layout, Space, Divider, Row, Col} from "antd";
import {LinkedinOutlined,TwitterOutlined } from '@ant-design/icons';


const { Footer} = Layout;
 export const Imprint = () => {
  return (
      <>
        <div id='imprint'>
        <Footer style={{ textAlign: 'center', marginTop: '20px'}}>
          <Row justify="space-between" align="middle">
            <Col span={4}>
              <img src="/d_lab.png" className='dlab-icon-footer' alt="Logo" width="100px" />
            </Col>
            <Col span={5}>
              <Row justify="center">
                <a href="https://www.linkedin.com/company/d-lab-company/about/" target="_blank">
                <LinkedinOutlined style={{fontSize: '25px', color: '#959ba4', marginRight: '15px', marginLeft: '60px'}}/>
                </a>
                <TwitterOutlined style={{fontSize: '25px', color: '#959ba4'}} />
              </Row>
            </Col>
          </Row>
          <Divider style={{ margin: '-10px 0' }} />
          <Row justify='space-around' align='middle'>
            <Col span={2}>
            <h3 style={{color: '#899196'}}>Imprint:</h3>
            </Col>
            <Col span={20}>
           <span style={{color: '#959ba4'}}> DZB Data Marketing UG
              Pappelallee 78/79, Berlin 10437, Germany
              Amtsgericht Charlottenburg (HRB 196265B).
              Geschäftsführer: Dmytro Zaplavskyi
              VAT: DE318341941
             </span>
            </Col>
          </Row>
        </Footer>
        </div>
      </>
  )
}

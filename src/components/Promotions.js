
import {Row, Image, Col} from 'antd'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Promotions = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // partialVisibilityGutter: 40
      // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // partialVisibilityGutter: 30
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30
      // slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
      <>
        <Row type="flex" justify="center">
          <Row type="flex" justify="center">
            <Col span={14}>
              <p className="text-center title">PROMOTIONS</p>
            </Col>
            <Col span={14}>
              <p style={{marginTop:'-50px', color: '#696969', fontSize: "23px"}}>Examples of our successful campaigns</p>
            </Col>
          </Row>
          <Col span={20} style={{marginTop: '20px'}}>
        <Carousel
            centerMode={true}
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
          <div className="carousel-item">
          <Image src="/promotions/promo-1.jpeg"></Image>
          </div>
          <div className="carousel-item">
          <Image src="/promotions/promo-2.jpeg"></Image>
          </div>
          <div className="carousel-item">
          <Image src="/promotions/promo-3.png"></Image>
          </div>
          <div className="carousel-item">
          <Image src="/promotions/promo-4.png"></Image>
          </div>
          <div className="carousel-item">
          <Image src="/promotions/promo-5.jpeg"></Image>
          </div>
        </Carousel>
          </Col>
        </Row>
      </>
  )
}

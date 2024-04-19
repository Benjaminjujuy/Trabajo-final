import Carousel from 'react-bootstrap/Carousel';

const CarrouselC = ({url, alt, width}) => {
  return (
   <>

   <Carousel fade>
      <Carousel.Item>
        <img src="https://www.cuponerapp.com/images/Fotoscupon/tr_2018-11-20_23_09_23.433269.jpg"
         alt="" 
         width={"100%"} />
      </Carousel.Item>
       
      <Carousel.Item>
        <img src="https://s3.amazonaws.com/smartsystem/pictures/11441/big/Peso_integrado.jpeg?1683046852"
         alt="" 
         width={"100%"} />
      </Carousel.Item>

      <Carousel.Item>
         <img src="https://www.eleconomista.com.mx/__export/1660672886563/sites/eleconomista/img/2022/08/16/smart-fit-.jpg_2104490323.jpg"
         alt="" 
         width={"100%"} />
      </Carousel.Item>
    </Carousel>
   </>
  );
};

export default CarrouselC;
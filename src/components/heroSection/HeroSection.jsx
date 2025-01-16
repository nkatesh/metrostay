import SAIT from '../../assets/s1.jpg'
import kUMAR from '../../assets/s2.jpg'
import kUMAR1 from '../../assets/s3.jpg'
import Mens from '../../assets/s4.jpg'
import WoMens from '../../assets/s5.jpeg'
import Hominterior from '../../assets/s6.jpg'




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {


  const images = [
    { url: kUMAR1, name: 'Shoes Banner' },
    { url: kUMAR, name: 'Laptop Banner' },
    { url: SAIT, name: 'Mobile Phone Banner' },
    { url: Mens, name: 'Mens Clothing Banner' },
    { url: WoMens, name: 'Women Clothing Banner' },
    { url: Hominterior, name: 'Home Interiors Banner' },
  ];



  const slides = images?.map((image, index) => (
    <SwiperSlide key={index}>

      <div >
        <img className=" h-52 w-full lg:h-[500px]" src={image.url} alt={image.name} />
      </div>

    </SwiperSlide>
  ));
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >
        {slides}
      </Swiper>

    </div>
  );
}

export default HeroSection;

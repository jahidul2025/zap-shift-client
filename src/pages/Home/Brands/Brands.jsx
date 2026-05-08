import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazonVector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import monster from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import starPeople from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const brandsLogos = [
    amazon, amazonVector, casio, monster, randstad, star, starPeople
];

const Brands = () => {
    return (
        <Swiper
        className='mt-20'
            loop={true}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
        >
            {
                brandsLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} alt="Brand Logo" /></SwiperSlide>)
            }

        </Swiper>
    );
};

export default Brands;
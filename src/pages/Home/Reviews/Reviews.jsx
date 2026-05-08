import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center px-4">
                <h2 className="text-3xl font-bold text-center mt-10 mb-6">Reviews</h2>
                <p className="max-w-2xl mx-auto mb-10">
                    Hear what our customers have to say about their experience with ZapShift.
                    We take pride in delivering excellence.
                </p>
            </div>
            <div className="pb-12">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper px-4"
                >
                    {
                        reviews.map(review => (
                            <SwiperSlide key={review.id} className="max-w-md">
                                <ReviewsCard review={review} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
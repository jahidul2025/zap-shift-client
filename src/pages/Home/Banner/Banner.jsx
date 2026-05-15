import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../../assets/banner/banner1.png';
import bannerimg2 from '../../../assets/banner/banner2.png';
import bannerimg3 from '../../../assets/banner/banner3.png';
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
    const links = <Link to="/raider" className="border border-black px-6 py-2 font-bold btn rounded-full">
        Be a Raider
    </Link>
    return (
        <div>
            <Carousel infiniteLoop={true} autoPlay={true} >
                <div>
                    <img src={bannerimg1} />
                    <div className="absolute bottom-20 left-30 flex justify-center items-center">
                        <div className="flex gap-4">
                            <div className="flex gap-0">
                                <button className="bg-primary text-black btn pl-6 pr-0 py-2 font-bold rounded-full">
                                    Track Your Parcel <span className="bg-black btn text-primary px-4 font-bold py-2 rounded-full"><FaArrowUp className="rotate-45" /></span>
                                </button>
                            </div>

                            {
                                links
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <img src={bannerimg2} />
                    <div className="absolute bottom-20 left-30 flex justify-center items-center">
                        <div className="flex gap-4">
                            <div className="flex gap-0">
                                <button className="bg-primary text-black btn pl-6 pr-0 py-2 font-bold rounded-full">
                                    Track Your Parcel <span className="bg-black btn text-primary px-4 font-bold py-2 rounded-full"><FaArrowUp className="rotate-45" /></span>
                                </button>
                            </div>

                            {
                                links
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <img src={bannerimg3} />
                    <div className="absolute bottom-20 left-30 flex justify-center items-center">
                        <div className="flex gap-4">
                            <div className="flex gap-0">
                                <button className="bg-primary text-black btn pl-6 pr-0 py-2 font-bold rounded-full">
                                    Track Your Parcel <span className="bg-black btn text-primary px-4 font-bold py-2 rounded-full"><FaArrowUp className="rotate-45" /></span>
                                </button>
                            </div>

                            {
                                links
                            }
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
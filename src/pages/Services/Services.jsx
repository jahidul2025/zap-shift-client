import serviceImg from '../../assets/service.png';

const Services = () => {
    return (
        <div className="bg-secondary rounded-2xl p-10 mt-40">
            <div>
                <h2 className="text-4xl font-bold text-white text-center">Our Services</h2>
                <p className=" text-white text-center">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="card h-[346px] items-center justify-center bg-white hover:scale-102 transition-transform duration-300 p-4 shadow-sm">
                    <figure>
                        <img
                            src={serviceImg}
                            alt="Shoes" />
                    </figure>
                    <div className=" text-center">
                        <h2 className=" text-center mt-4 mb-4 font-bold text-xl">
                            Express  & Standard <br /> Delivery
                        </h2>
                        <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. <br />Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>

                    </div>
                </div>
                <div className="card h-[346px] items-center justify-center bg-white hover:scale-102 transition-transform duration-300 p-4 shadow-sm">
                    <figure>
                        <img
                            src={serviceImg}
                            alt="Shoes" />
                    </figure>
                    <div className=" text-center">
                        <h2 className=" text-center mt-4 mb-4 font-bold text-xl">
                            Nationwide Delivery
                        </h2>
                        <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>

                    </div>
                </div>
                <div className="card h-[346px] items-center justify-center bg-white hover:scale-102 transition-transform duration-300 p-4 shadow-sm">
                    <figure>
                        <img
                            src={serviceImg}
                            alt="Shoes" />
                    </figure>
                    <div className=" text-center">
                        <h2 className=" text-center mt-4 mb-4 font-bold text-xl">
                            Fulfillment Solution
                        </h2>
                        <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>

                    </div>
                </div>
                <div className="card h-[346px] items-center justify-center bg-white hover:scale-102 transition-transform duration-300 p-4 shadow-sm">
                    <figure>
                        <img
                            src={serviceImg}
                            alt="Shoes" />
                    </figure>
                    <div className=" text-center">
                        <h2 className=" text-center mt-4 mb-4 font-bold text-xl">
                            Cash on Home Delivery
                        </h2>
                        <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>

                    </div>
                </div>
                <div className="card h-[346px] items-center justify-center bg-white hover:scale-102 transition-transform duration-300 p-4 shadow-sm">
                    <figure>
                        <img
                            src={serviceImg}
                            alt="Shoes" />
                    </figure>
                    <div className=" text-center">
                        <h2 className=" text-center mt-4 mb-4 font-bold text-xl">
                            Corporate Service / Contract In Logistics
                        </h2>
                        <p>Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                </div>
                <div className="card h-[346px] items-center justify-center bg-white hover:scale-102 transition-transform duration-300 p-4 shadow-sm">
                    <figure>
                        <img
                            src={serviceImg}
                            alt="Shoes" />
                    </figure>
                    <div className=" text-center">
                        <h2 className=" text-center mt-4 mb-4 font-bold text-xl">
                            Parcel Return
                        </h2>
                        <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
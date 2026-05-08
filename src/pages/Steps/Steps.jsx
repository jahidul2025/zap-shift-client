import bookingIcon from '../../assets/bookingIcon.png';
const Steps = () => {
    return (
        <div>
            <div>
                <h2 className='font-extrabold text-5xl mt-30'>How It Works</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 '>
                    <div className='bg-white p-6 rounded-lg shadow-md hover:scale-102 transition-transform duration-300'>
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h5 className='font-bold text-xl mt-4'>Booking Pick & Drop</h5>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    <div  className='bg-white p-6 rounded-lg shadow-md hover:scale-102 transition-transform duration-300' >
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h5 className='font-bold text-xl mt-4'>Cash On Delivery</h5>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    <div  className='bg-white p-6 rounded-lg shadow-md hover:scale-102 transition-transform duration-300' >
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h5 className='font-bold text-xl mt-4'>Delivery Hub</h5>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    <div  className='bg-white p-6 rounded-lg shadow-md hover:scale-102 transition-transform duration-300'>
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h5 className='font-bold text-xl mt-4'>Booking SME & Corporate</h5>
                        <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
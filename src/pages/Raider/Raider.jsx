import  { useState } from 'react';

const Raider = () => {
    const [formData, setFormData] = useState({
        name: '',
        licenseNumber: '',
        email: '',
        region: '',
        district: '',
        nid: '',
        phone: '',
        bikeModel: '',
        bikeRegistration: '',
        about: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add your API call here
        // Example redirect after submission:
        // navigate('/success'); 
    };

    return (
        <div className="max-w-6xl mx-auto p-6 lg:p-12 font-sans text-gray-800">
            {/* Header Section */}
            <div className="mb-10 max-w-2xl">
                <h1 className="text-4xl font-extrabold text-[#0a303a] mb-4">Be a Raider</h1>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Form Section */}
                <div>
                    <h2 className="text-2xl font-bold text-[#0a303a] mb-6">Tell us about yourself</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                                required
                            />
                        </div>

                        {/* Driving License */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Driving License Number</label>
                            <input
                                type="text"
                                name="licenseNumber"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                                placeholder="Driving License Number"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                                required
                            />
                        </div>

                        {/* Region Select */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Your Region</label>
                            <select
                                name="region"
                                value={formData.region}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a] bg-white"
                                required
                            >
                                <option value="" disabled>Select your Region</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chittagong</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        {/* District Select */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Your District</label>
                            <select
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a] bg-white"
                                required
                            >
                                <option value="" disabled>Select your District</option>
                                <option value="district1">District 1</option>
                                <option value="district2">District 2</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        {/* NID */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">NID No</label>
                            <input
                                type="text"
                                name="nid"
                                value={formData.nid}
                                onChange={handleChange}
                                placeholder="NID"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                                required
                            />
                        </div>

                        {/* Bike Model */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Bike Brand Model and Year</label>
                            <input
                                type="text"
                                name="bikeModel"
                                value={formData.bikeModel}
                                onChange={handleChange}
                                placeholder="Bike Brand Model and Year"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                                required
                            />
                        </div>

                        {/* Bike Registration */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Bike Registration Number</label>
                            <input
                                type="text"
                                name="bikeRegistration"
                                value={formData.bikeRegistration}
                                onChange={handleChange}
                                placeholder="Bike Registration Number"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                                required
                            />
                        </div>

                        {/* About Yourself */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-600 mb-1">Tell Us About Yourself</label>
                            <input
                                type="text"
                                name="about"
                                value={formData.about}
                                onChange={handleChange}
                                placeholder="Tell Us About Yourself"
                                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0a303a]"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-[#c3e86b] hover:bg-[#b0d655] text-[#0a303a] font-bold py-3 px-4 rounded-md transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Illustration Section */}
                <div className="hidden lg:flex justify-center items-center sticky top-10">
                    <img
                        src="https://placehold.co/500x500/transparent/0a303a?text=Rider+Illustration"
                        alt="Delivery Rider on Scooter"
                        className="w-full max-w-md object-contain drop-shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Raider;

import { Suspense } from "react";
import Services from "../../Services/Services";
import Steps from "../../Steps/Steps";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";


const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className="bg-[#ECF0F1]">
            <Banner></Banner>
            <Steps></Steps>
            <Services></Services>
            <Brands></Brands>
            <Suspense fallback={<div className="text-center py-10">Loading reviews...</div>}>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </Suspense>
        </div>
    );
};

export default Home;
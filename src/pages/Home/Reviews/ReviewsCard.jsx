
const ReviewsCard = ({ review }) => {
    const { userName, user_photoURL, ratings, review: reviewText, date } = review;
    return (
        <div className="card bg-base-100 shadow-xl m-4 h-full">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user_photoURL} alt={userName} />
                    </div>
                </div>
                <h2 className="card-title mt-4">{userName}</h2>
                <div className="flex gap-1 text-orange-400">
                    <p className="font-bold">Rating: {ratings}</p>
                </div>
                <p className="italic">"{reviewText}"</p>
                <div className="text-xs text-gray-500 mt-2">
                    {new Date(date).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
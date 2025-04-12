import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      "https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B0%5D=ChIJtUEfhCYeDTkR-1j91D4Evys&with_text_only=1&min_rating=4&order=date&page_length=100"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.result && Array.isArray(data.result.data)) {
          const textReviews = data.result.data.filter(
            (review) => review.text && review.text.trim() !== ""
          );
          setReviews(textReviews);
        } else {
          setError("Could not find reviews in the expected format.");
        }
      })
      .catch((error) => setError(`Error fetching reviews: ${error.message}`))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="font-semibold text-lg">4.1</span>
            <span className="text-pink-500 text-xl">★★★★</span>
            <span>{reviews.length} reviews</span>
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-5 rounded-full text-sm font-semibold shadow-md transition duration-200">
            WRITE A REVIEW
          </button>
        </div>
        <span className="flex items-center gap-1 -mt-7 text-[12px] ml-10">
          Powered By <span className="font-semibold">Google</span>
        </span>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-600 mt-10">Loading reviews...</p>
        )}

        {/* Error State */}
        {error && <p className="text-center text-red-500 mt-10">{error}</p>}

        {/* Reviews Section */}
        {!loading && !error && (
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md z-10"
              onClick={handleScrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-5 pb-4 px-4 scrollbar-hide"
            >
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 w-60 sm:w-72 md:w-80 flex-shrink-0 flex flex-col items-start text-left bg-white rounded-lg shadow-md"
                  >
                    {/* Reviewer Info */}
                    <div className="flex items-center w-full mb-3">
                      <img
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 border-2 border-gray-200"
                        src={
                          review.reviewer_picture_url ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            review.reviewer_name || "User"
                          )}&background=random&color=fff`
                        }
                        alt={review.reviewer_name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            review.reviewer_name || "User"
                          )}&background=random&color=fff`;
                        }}
                      />
                      <div className="flex-grow">
                        <h3 className="text-sm sm:text-md font-semibold text-gray-800">
                          {review.reviewer_name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(
                            review.published_at * 1000
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="mt-1 text-xs sm:text-sm text-gray-700 leading-relaxed h-20 sm:h-24 overflow-hidden text-ellipsis">
                      {review.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 w-full">
                  No reviews available.
                </p>
              )}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md z-10"
              onClick={handleScrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;

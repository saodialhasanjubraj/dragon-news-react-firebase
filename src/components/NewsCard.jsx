import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

export default function NewsCard({ news }) {
  const newsData = news;
  // Format date

  const date = new Date(news.author.published_date).toLocaleDateString();

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-warning" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="card bg-base-100 shadow-xl max-w-md">
      {/* Author Info Header */}
      <div className="flex items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={newsData.author.img} alt={newsData.author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base">{newsData.author.name}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm btn-circle">
            <FaBookmark className="text-lg" />
          </button>
          <button className="btn btn-ghost btn-sm btn-circle">
            <FaShareAlt className="text-lg" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-xl font-bold leading-tight">
          {newsData.title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={newsData.thumbnail_url}
          alt={newsData.title}
          className="rounded-xl w-full h-64 object-cover"
        />
      </figure>

      {/* Tags */}
      <div className="px-4 pt-4">
        <div className="flex flex-wrap gap-2">
          {newsData.tags.map((tag, index) => (
            <span key={index} className="text-sm text-gray-600">
              {tag}
              {index < newsData.tags.length - 1 && ","}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pt-2">
        <p className="text-sm text-gray-600 line-clamp-3">{newsData.details}</p>
        <button className="text-orange-500 font-semibold text-sm mt-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Footer with Rating and Views */}
      <div className="card-body pt-4">
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {renderStars(newsData.rating.number)}
            </div>
            <span className="font-bold text-lg">{newsData.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye className="text-xl" />
            <span className="font-semibold">{newsData.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

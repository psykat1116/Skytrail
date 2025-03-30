import { formatDistance } from "date-fns";

const BlogCard = ({ title, description, createdAt, author, url, imageUrl }) => {
  return (
    <a
      className="flex flex-col items-start justify-between gap-y-2 p-2 bg-violet-200 rounded-md shadow-md w-full cursor-pointer"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between w-full">
          <p className="text-xs text-gray-600">
            {author ? `By ${author}` : "By Unknown Author"}
          </p>
          <p className="text-xs text-gray-600">
            {formatDistance(createdAt, new Date(), { addSuffix: true })}
          </p>
        </div>
        <img
          src={imageUrl}
          alt={author || "Author"}
          height={50}
          width={280}
          className="object-cover aspect-video rounded-sm"
        />
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default BlogCard;

import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => {
        return (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
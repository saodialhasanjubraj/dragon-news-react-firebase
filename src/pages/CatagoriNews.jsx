import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CatagoriNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [filterNewsData, setFilterNewsData] = useState([]);

  useEffect(() => {
    if (id == Number(0)) {
      //* id ==0 contains all kind of news
      setFilterNewsData(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        //* id ==1 contains the latest news cards.
        (news) => news.others.is_today_pick == true
      );
      {
        setFilterNewsData(filterNews);
      }
    } else {
      const filterNews = data.filter((news) => news.category_id == Number(id));
      setFilterNewsData(filterNews);
      return;
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-5 border-b-2 w-fit border-sky-500">
        Total news found: {filterNewsData.length}
      </h1>
      <div className="flex flex-col space-y-2 h-[70vh] overflow-y-scroll">
        {filterNewsData.map((news) => (
          <NewsCard news={news} />
        ))}
      </div>
    </div>
  );
};

export default CatagoriNews;

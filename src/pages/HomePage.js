import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data?.categories.map((category, index) => (
        <div
          key={index}
          className="bg-yellow-500 shadow-md rounded-lg overflow-hidden m-6 max-w-xs"
        >
          <img
            className="w-full h-58 "
            src={category.strCategoryThumb}
            alt={category.strCategory}
          />
          <div className="p-4">
            <h3 className="text-black font-mono text-3xl ">
              {category.strCategory}
            </h3>
            {/* <p className="text-gray-700">{category.strCategoryDescription}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

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
    <div>
      {data?.categories.map((category, index) => (
        <div key={index}>
          <h3>{category.strCategory}</h3>
          <p>{category.strCategoryDescription}</p>
          <img src={category.strCategoryThumb} alt={category.strCategory} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;

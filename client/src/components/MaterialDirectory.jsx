import React from "react";
import { useEffect } from "react";
import Card from "../shared/Card";
import { useState } from "react";

function MaterialDirectory() {
  const [supList, setSupList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/supplier/");
      const data = await response.json();
      setSupList(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <div>
        {supList.map((item) => (
          <Card key={item.supplier_id}>
            <div className='text-display'>{item.supplier_name}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MaterialDirectory;

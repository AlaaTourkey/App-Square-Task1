import { Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAllInfo() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=50');
      setItems(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log( "errorrrr");
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllInfo();
  }, []);

  return (
    <div className="container w-3/4 m-auto">
      <h1 className='text-3xl text-center my-5'>INFORMATION</h1>
      {loading ? (
        <div className="text-center my-5">
          <Skeleton active />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 my-5">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="border-2 border-state-800 p-5 hover:border-amber-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:shadow-2xl">
                <h2 className='font-bold text-center'>{item.id}</h2>
                <div>
                  <h3 className='text-lg'><strong>Name:</strong> {item.name}</h3>
                  <h4 className='text-md text-gray-400 font-semibold'><i>{item.email}</i></h4>
                  <p className='text-gray-700 my-4'>{item.body}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">there is No data available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
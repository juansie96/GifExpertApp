import React, {} from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

  const {data: gifs, loading} = useFetchGifs(category);

  return (
    <div className="card-grid-container">
      <h3>{category}</h3>
      {loading && <h5>Cargando</h5>}

      <div className="card-grid">
        {gifs 
          ? gifs.map(gif => (
              <GifGridItem key={gif.id} {...gif} />
            )) 
          : 'No hay data'
        };
      </div>
    </div>
  );
};

export default GifGrid;

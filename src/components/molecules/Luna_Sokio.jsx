import React from "react";

function CardStore({image}) {
  return (
    <>
      <div className="block rounded-lg ">
        <div className="">
          <img
            className="rounded-t-lg "
            src={image}
            alt=""
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-bold leading-tight text-[#d8f7d5] text-center">
          Crema para ojeras.
          </h5>
          <p className="mb-4 text-base text-[#d8f7d5] text-center ">
          Ayuda a eliminar la pignmentacion de las ojeras que son ocacionadas por el cansancio, estan hechas a base de hierbabuena y cafeina.
          </p>
        </div>
      </div>
    </>
  );
}

export default CardStore;

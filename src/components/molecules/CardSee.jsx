import React from "react";

function CardSee({image, text}) {
  return (
    <>
      <article className=" space-y-4 md:space-y-6">
        <div className="flex items-center gap-1">
          <img
            src={image}
            alt="IMG"
            className=" w-[510px] h-[150px]"
          />
          <p className="text-black text-left">
          {text}
          </p>
        </div>
      </article>
    </>
  );
}

export default CardSee;

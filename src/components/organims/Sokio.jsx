import React from "react";
import crema1 from '../../assets/image/crema1.jpeg';
import crema2 from '../../assets/image/crema2.jpeg';
import crema3 from '../../assets/image/crema3.jpeg';
import CardSee from "../molecules/CardSee";
import Titulo from "../atoms/Titulo";

function Sokio() {
  return (
    <>
      <section className=" wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left">
        <article>
          <Titulo text="SOKIO CARE EN LO MAS NUEVO." />
        </article>

        <div className=" grid gap-12">
         <CardSee image={crema1} text="El nuevo producto de Sokio Care son las mascarillas de arcilla hechas de savila y acido hialuronico perfectas para quitar aquellas impurezas del rostro."/>
         <CardSee image={crema2} text="El nuevo producto de Sokio Care son las mascarillas de arcilla hechas de savila y acido hialuronico perfectas para quitar aquellas impurezas del rostro."/>
         <CardSee image={crema3} text="El nuevo producto de Sokio Care son las mascarillas de arcilla hechas de savila y acido hialuronico perfectas para quitar aquellas impurezas del rostro."/>
        </div>
      </section>
    </>
  );
}

export default Sokio;

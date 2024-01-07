import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../assets/icons/Mail-icon.svg";
import phoneIcon from "../assets/icons/Phone-grey.svg";

const ContactSide = () => {
  return (
    <article className="flex flex-col justify-center gap-8 text-[#6B7280] text-sm font-normal leading-4 w-[588px]">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold leading-6 text-[#111827]">
          Entra en contacto con nosotros
        </h3>
        <p>
          Si tienes dudas, ponte en contacto con nosotros a través del
          formulario y te responderemos lo antes posible.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p>
          TAmbién puedes ponerte en contacto con nostros en nuestra dirección o
          a través del teléfono de la tienda.
        </p>

        <div className="">
          <p>742 Evergreen Terrace</p>
          <p>Springfield, OR 12345</p>
        </div>

        <div className="flex gap-4 items-center">
          <img src={phoneIcon} alt="" />
          <p>+1 (555) 123-4567</p>
        </div>

        <div className="flex gap-4 items-center">
          <img src={mailIcon} alt="" />
          <p>support@example.com</p>
        </div>

        <p>
          ¿Buscas un trabajo?<span> </span>
          <Link
            to={""}
            className="text-[#111827] underline text-sm font-semibold leading-4"
            href=""
          >
            Ver nuestras ofertas.
          </Link>
        </p>
      </div>
    </article>
  );
};

export default ContactSide;

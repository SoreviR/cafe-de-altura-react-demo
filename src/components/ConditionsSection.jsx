import React from "react";
import clipboardIcon from "../assets/icons/Clipboard check.svg";
import truckIcon from "../assets/icons/Truck.svg";
import giftIcon from "../assets/icons/Gift.svg";
import ConditionCard from "./ConditionCard";
import backgroundCoffee from "../assets/images/condition-cards-background.jpg";

const ConditionsSection = () => {
  const conditionsInfo = [
    {
      icon: clipboardIcon,
      title: "Recibe tu pedido sin preocuparte",
      content:
        "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.",
    },
    {
      icon: truckIcon,
      title: "Envío en 24/48h",
      content: "Pide tu café antes de las 12h y lo recibirás al día siguiente.",
    },
    {
      icon: giftIcon,
      title: "Descuentos y beneficios",
      content:
        "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.",
    },
  ];

  return (
    <div
      className="px-[147px] py-12 gap-6 flex flex-col bg-no-repeat bg-center bg-cover w-full items-center h-[380px]"
      style={{ backgroundImage: `url(${backgroundCoffee})` }}
    >
      <h2 className="text-2xl text-center font-medium text-white">
        Café con las mejores condiciones
      </h2>
      <div className="flex justify-center text-center text-Dark-grey-color gap-6  w-[996px] h-[232px]">
        {conditionsInfo.map((condition, i) => {
          return (
            <ConditionCard
              key={i}
              icon={condition.icon}
              cardTitle={condition.title}
              cardContent={condition.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConditionsSection;

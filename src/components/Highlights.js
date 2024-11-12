import React from "react";
import highlightsStyle from "./components.module.css/Highlights.module.css";
import greekSalad from "../images/highlights/greek-salad.jpg";
import bruchetta from "../images/highlights/bruchetta.jpg";
import lemonDessert from "../images/highlights/lemon-dessert.jpg";
import orderADelivery from "../images/highlights/order.jpg";
import { Link } from "react-router-dom";

const Highlights = () => {
  const meals = [
    {
      id: 1,
      image: greekSalad,
      name: "Greek salad",
      price: 12.99,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum totam dicta itaque id optio! Dolorum odit eos consectetur enim?",
      order: orderADelivery,
    },
    {
      id: 2,
      image: bruchetta,
      name: "Bruchetta",
      price: 5.99,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque harum sequi suscipit hic exercitationem alias repellendus deserunt numquam nemo minima.",
      order: orderADelivery,
    },
    {
      id: 3,
      image: lemonDessert,
      name: "Lemon Dessert",
      price: 5.0,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni earum. Accusantium magni error nihil dolores ipsum dicta debitis quasi.",
      order: orderADelivery,
    },
  ];

  return (
    <div className={highlightsStyle.highlights}>
      <div className={highlightsStyle.partOne}>
        <h2>This weeks specials!</h2>

        <Link to="/little-lemon-website/order-online">
          <button>Online Menu</button>
        </Link>
      </div>

      <div className={highlightsStyle.card}>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              <img
                src={meal.image}
                alt="image"
                className={highlightsStyle.mealImage}
              />

              <div className={highlightsStyle.mealDescription}>
                <div className={highlightsStyle.mealTitle}>
                  <h3>{meal.name}</h3>
                  <h4>${meal.price.toFixed(2)}</h4>
                </div>

                <p>{meal.review}</p>

                <Link to="/booking-a-table-on-the-little-lemon-website-react/order-online">
                  <span>Order a delivery</span>

                  <img
                    src={meal.order}
                    alt="image"
                    className={highlightsStyle.orderImage}
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Highlights;

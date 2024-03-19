import mercadopage from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async (req, res) => {
  mercadopage.configure({
    access_token: "TEST-1803343693495513-031302-c1900d6daa9003f2b3c54e32a6c102c5-1726167154",
  });

  mercadopage.preferences.create({
    items: [
        {
            title: "laptop",
            unit_price: 12000,
            currency_id: "ARS",
            quantity: 1,
        }
    ]
  })
  res.send("creando orden")
};
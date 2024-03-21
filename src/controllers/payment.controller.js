import mercadopage from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";
import { query } from "express";

export const createOrder = async (req, res) => {
  mercadopage.configure({
    access_token: "TEST-1803343693495513-031302-c1900d6daa9003f2b3c54e32a6c102c5-1726167154",
  });

  //Orden De Compra, el "create" es para crear la orden de compra.
  const result = await mercadopage.preferences.create({
    items: [
        {
            title: "laptop",
            unit_price: 12000,
            currency_id: "ARS",
            quantity: 1,
        }
    ],
    back_urls: {
      success:"http://localhost:4000/success",
      failure: "http://localhost:4000/failure",
      pending: "http://localhost:4000/pendig",
    },
    notification_url:"https://0c7a-179-62-123-13.ngrok-free.app/webhook"
  });

    console.log(result);
  res.send(result.body);
};

export const receiveWebhook = (req, res) => {
  console.log(req.query)

  res.send("webhook");
}
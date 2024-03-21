import {Router} from 'express';
import {
    createOrder, receiveWebhook,
} from '../controllers/payment.controller.js';


const router = Router();

router.post('/create-order',createOrder); //http://localhost:4000/create-order

router.get('/success', (req, res) => res.send('success'));

router.get('/failure', (req, res) => res.send('failure'));

router.get('/pendig', (req, res) => res.send('pendig'));

router.post("/webhook", receiveWebhook);

export default router;
//Uy%:7>ÑssÑ^e>RS7
import mercadopago from 'mercadopago';

// Configurar el token de acceso de MercadoPago
mercadopago.configurations.setAccessToken('TEST-1803343693495513-031302-c1900d6daa9003f2b3c54e32a6c102c5-1726167154');

export const createOrder = (req, res) => {
    // Aquí puedes realizar otras operaciones relacionadas con la creación de la orden
    
    // Por ejemplo, enviar un mensaje de éxito
    res.status(200).json({ message: 'Orden creada exitosamente' });
};

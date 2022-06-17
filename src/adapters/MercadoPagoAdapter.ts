import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {

    constructor(private mercadoPago: MercadoPago) {}

    authToken(): Token {
        return this.mercadoPago.authToken();
    }
    payPalPayment(): void {
        return this.mercadoPago.sendPayment();
    }
    payPalReceive(): void {
        return this.mercadoPago.receivePayment();
    }
}
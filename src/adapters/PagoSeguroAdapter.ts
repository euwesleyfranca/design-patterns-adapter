import PagueSeguro from "../pagueSeguro/PagueSeguro";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PagueSeguroAdapter implements IPayPalPayment {
    constructor(private pagueSeguro: PagueSeguro ) {}
    
    authToken(): Token {
       return this.pagueSeguro.authToken();
    }
    payPalPayment(): void {
        return this.pagueSeguro.sendTestPayment();
    }
    payPalReceive(): void {
       return this.pagueSeguro.receiveTestPayment();
    }
}
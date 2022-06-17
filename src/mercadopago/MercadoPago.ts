import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
    private token = new Token();
    authToken(): Token {
       return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log('TOKEN: ' +  this.token.getToken());
        console.log('Enviando pagamento via mercado pago');
    }
    receivePayment(): void {
       console.log('recebendo pagamentos via mercado pago');
       
    }
}
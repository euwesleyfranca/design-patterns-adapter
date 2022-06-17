import IPayPalPayment from "./IPayPalPayment";
import Token from "../utils/Token";

export default class PayPal implements IPayPalPayment {

    private token: Token;

    authToken(): Token {
       return new Token();       
    }
    payPalPayment(): void {
       this.token = this.authToken();
       console.log('TOKEN: ' +  this.token.getToken());
       console.log('Enviando pagamento via paypal');        
    }
    payPalReceive(): void {
        console.log('Recebendo pagamento via paypal');        
    }
}
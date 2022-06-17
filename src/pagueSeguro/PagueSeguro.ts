import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";
import IPagueSeguroPayment from "./IPagueSeguroPayment";

export default class PagueSeguro implements IPagueSeguroPayment {
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendTestPayment(): void {
        this.token = this.authToken();
        console.log('TOKEN: ' +  this.token.getToken());
        console.log('Enviando pagamento via Pague Seguro');
    }
    receiveTestPayment(): void {
       console.log('recebendo pagamento via Pague Seguro...');
       
    }
}
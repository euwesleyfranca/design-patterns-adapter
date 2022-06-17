import Token from "../utils/Token";

export default interface IPagueSeguroPayment {
    authToken(): Token;
    sendTestPayment(): void;
    receiveTestPayment(): void;
}
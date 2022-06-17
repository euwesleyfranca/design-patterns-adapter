import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/IPayPalPayment";
import MercadoPago from "./mercadopago/MercadoPago";
import IMercadoPagoPayment from "./mercadopago/IMercadoPagoPayment";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PagueSeguroAdapter from "./adapters/PagoSeguroAdapter";
import PagueSeguro from "./pagueSeguro/PagueSeguro";

const payment: IPayPalPayment = new PayPal();

payment.payPalPayment();
payment.payPalReceive();

// const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

// payment.payPalPayment();
// payment.payPalReceive();

// const payment: IPayPalPayment = new PagueSeguroAdapter(new PagueSeguro());

// payment.payPalPayment();
// payment.payPalReceive();
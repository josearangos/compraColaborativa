import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  readonly endPointTransaction =
    "http://loopback-hackathon.mybluemix.net/api/transactions";

  transactionModel = {

    "card_number": "2077139",
    "cardTransaction_amount": "77777",
    "cardTransaction_concept": "Compra compartida x2",
    "cardTransaction_currency": "COP",
    "cardTransaction_date": "2018-09-21",
    "cardTransaction_id": "12345687",
    "cardTransaction_valueDate": "2018-05-06 ",
    "cardsId": "2077139"
  };

  transaction() {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      `${this.endPointTransaction}`,this.transactionModel,
      {
        headers
      }
    );
  }
}

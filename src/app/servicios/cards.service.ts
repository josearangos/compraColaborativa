import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}
  endPointTransaction =
    "http://loopback-hackathon.mybluemix.net/api/transactions";
  endPointToken =
    "https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/token";
  endPointCards =
    "https://sbapi.bancolombia.com/hackathon/v1/operations/product-specific/cards";

  transaction(transactionModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      `${this.endPointTransaction}`,
      transactionModel,
      { headers }
    );
  }

  token(codigo) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let body = new URLSearchParams();
    body.set("client_id", "92d5af2c-e6c1-49e5-8135-7abc3c970d03");
    body.set(
      "client_secret",
      "A7lR6uM0jU6xH0aH4bC4eP8dA6uG8vF3hK2lS3mA6uW6uW6tD4"
    );
    body.set("code", codigo);
    body.set("grant_type", "authorization_code");

    console.log(body);

    return this.httpClient.post(
      `${this.endPointToken}`,
      body.toString(),
      httpOptions
    );
  }

  cards(token) {
    const headers = new HttpHeaders({
      authorization: "Bearer " + token
    });
    return this.httpClient.get(`${this.endPointCards}`, { headers });
  }
}

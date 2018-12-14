import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  endPointTransaction =
    "http://loopback-hackathon.mybluemix.net/api/transactions";

  transaction(transactionModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      `${this.endPointTransaction}`,
      transactionModel,
      { headers }
    );
  }

  
}

import { Component } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-end';

  constructor(private paymentService: PaymentService) {}

  pay() {
    this.paymentService.pay().subscribe((data) => {
      console.log(data);
    });
  }
}

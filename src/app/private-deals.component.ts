import { Component, OnInit } from '@angular/core';
import { Deal } from './deal';

import { AuthService } from './auth.service';
import { DealService } from './deal.service';

@Component({
  selector: 'private-deals',
  
  templateUrl: 'private-deals.component.html',
  styleUrls: ['private-deals.component.css']
})

export class PrivateDealsComponent implements OnInit {
  privateDeals: Deal[];

  constructor(
    private authService: AuthService,
    private dealService: DealService
    ) {
  }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.dealService.getPrivateDeals()
      .then(deals => this.privateDeals = deals);
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}

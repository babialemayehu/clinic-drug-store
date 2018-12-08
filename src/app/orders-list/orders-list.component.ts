import { Component, OnInit } from '@angular/core';
import { Order } from '../model/Order';
import { OrderService } from '../service/order.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  private $orders: Order[] = []; 
  private orderDataSource: MatTableDataSource<Order> = new MatTableDataSource(); 
  private displayedColumns = ['no','ordered_by', 'ordered_at']; 

  constructor(private _order: OrderService) { }

  ngOnInit() {
    this._order.getOrders().subscribe(
      (responce) => {
        console.log(responce); 
        this.$orders = responce;
        this.orderDataSource.data = responce; 
       }
    ); 
  }
  

}

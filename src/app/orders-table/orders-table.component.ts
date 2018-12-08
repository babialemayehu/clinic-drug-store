import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatTab, MatTableDataSource } from '@angular/material';
import { Order } from '../model/Order';
import { OrderService } from '../service/order.service';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  private orderDataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>(); 
  private $orders: Order[] = []; 
  private $selectedOrders: Order[] = []; 
  private all = true;
  public displayedColumns = [
      'recived', 
      'no',
      'drug',
      'quantity',
      'autorized',
      'issued_quantity',   
      'expier_at',
      'batch_number',
      'is_recived',
      'recived_at']; 


  @Input() orders; 
  @ViewChild('selectAll') selectAll: ElementRef;


  ngOnChanges(){
    this.$orders = this.orders;
    this.orderDataSource.data = this.orders;
     
    this.$orders.forEach(order => {
      if(!order.selected){this.all = false; }
    });
  }
  log(){console.log("alskjdsf"); }
  constructor(private _order: OrderService, private _router: Router) { }

  ngOnInit() {
  }

  select(i, e){
  }

  _selectAll(e){
    if(e.checked){
      this.$orders.forEach(order => {
        order.selected = true; 
      });

    }else{
      this.$orders.forEach(order => {
        order.selected = false;
      });
    }
    this.orderDataSource.data = this.$orders;
  }

  issue(){
    this._order.issue(this.$orders).subscribe(
      responce => {
        this._router.navigate(["/drug"]); 
        
      }
    )
  }
  change(e){
    console.log(e); 
  }
}

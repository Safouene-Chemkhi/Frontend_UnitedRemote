import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input('shop') shop:any;

  btn_txt = "Like"
  liked = false;
  btn_style = "btn btn-primary btn-lg btn-block"
  constructor(public auth: AuthService,) { }

  like(){
    this.liked = !this.liked;
    this.btn_txt = this.liked ? "Dislike" : "Like" ;
    this.btn_style = this.liked ? "btn btn-danger btn-lg btn-block" : "btn btn-primary btn-lg btn-block" ;
  }
  ngOnInit() {
  }

}

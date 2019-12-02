import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nearby_shops = [];
  url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBJOUrsYSvlkHDTlu9Fpqco3FjdD7bzWN4&location=-33.8670522,151.1957362&radius=500&types=food&name=harbour";
  constructor(private http: HttpClient) {
    /*let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    this.http.get(this.url, {headers: headers}).subscribe(res => {
      console.log(res);  
    })*/
   }

   getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

   findNearbyPlaces(position){
    let types = ["bakery","bar","bicycle_store","book_store","cafe","clothing_store","convenience_store","department_store","electronics_store","florist","food","furniture_store","grocery_or_supermarket","hair_care","hardware_store","home_goods_store","jewelry_store","library","liquor_store","meal_takeawaymovie_rental","pet_store","pharmacy","restaurant","shoe_store","shopping_mall","storage","store"]

    let request = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      types: types
    };

     const service = new google.maps.places.PlacesService(document.createElement('div'));
     service.nearbySearch(request, this.nearbyCallback.bind(this));

   }
    
       // Handle the results (up to 20) of the Nearby Search
     nearbyCallback(results, status, pagination) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.nearby_shops.concat(results);
          console.log(this.nearby_shops);
          /*setInterval(() => {
          this.nearby_shops = results;
          console.log(this.nearby_shops);
        }, 3000);*/
        }

        if (pagination.hasNextPage) {
          //sleep:2;
          setTimeout(() => {
            pagination.nextPage();
          }, 2000);
      }

      }

  ngOnInit() {
    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         this.findNearbyPlaces(pos);
      });
  }

}

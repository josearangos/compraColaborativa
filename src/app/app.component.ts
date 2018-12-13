import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compraColaborativa';
  //This is fo demoing product detail
  getProduct = {
  	name:"Nombre Producto",
  	rating: 4,
  	price: "10.000",
  	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis non, quidem. Tempora nisi minima voluptatem! Eveniet quia culpa nihil. Optio nisi ab velit enim molestias quis in rem consequatur.",
  	picture: "https://bpi-group.us/wp-content/uploads/2017/06/image-placeholder.jpg",
  	reviews:[
  		{
  			user: "Una pyme",
  			logo: "https://storage.googleapis.com/google-code-archive/v2/code.google.com/plan9front/logo.png",
  			rating: 3,
  			comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti porro labore ullam deserunt officia aut facere quia odit, fugiat eum nihil placeat. Non commodi ipsum explicabo beatae culpa iste."
  		},
  		{
  			user: "Otra pyme",
  			logo:"https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_Take_That.png",
  			rating: 5,
  			comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti porro labore ullam deserunt officia aut facere quia odit, fugiat eum nihil placeat. Non commodi ipsum explicabo beatae culpa iste."
  		}
  	]
  };

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent {
  update: Boolean = false;
  new_product: Product = {
    name: "",
    price: 0,
    description: ""
  }
  constructor(private route: ActivatedRoute, private product_service: ProductService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["slug"]) {
      this.get_product(this.route.snapshot.params["slug"]);
      this.update = true;
    }
  }

  get_product(slug: string): void {
    this.product_service.getOne(slug).subscribe({
      next: data => {
        this.new_product = data;
        console.log(this.new_product)
      },
      error: e => {
        console.error(e);
      }
    })
  }

  insert_product(): void {
    this.product_service.insert_product(this.new_product).subscribe({
      next: data => {
        console.log(data)
        this.router.navigate(['/product'])
        this.toastrService.success("This product has been add")
      }
    })
  }

  update_product(): void {
    this.product_service.update_product(this.new_product, this.route.snapshot.params["slug"]).subscribe({
      next: data => {
        this.router.navigate(['/product'])
        this.toastrService.success("This product has been update")
      }
    })
  }

}

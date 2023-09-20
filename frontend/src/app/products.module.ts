import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsRoutingModule} from './products-routing';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductCardComponent,
        ProductsAddComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        FormsModule
    ]
})

export class ProductsModule {}
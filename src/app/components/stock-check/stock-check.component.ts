import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { StockResponse } from '../../models/product.model';

@Component({
  selector: 'app-stock-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-check.component.html',
  styleUrl: './stock-check.component.css'
})
export class StockCheckComponent implements OnInit {
  stockInfo: StockResponse | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.checkStock(+params['id']);
      }
    });
  }

  checkStock(productId: number): void {
    this.loading = true;
    this.error = null;
    this.productService.checkStock(productId).subscribe({
      next: (data) => {
        this.stockInfo = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to check stock information';
        this.loading = false;
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}

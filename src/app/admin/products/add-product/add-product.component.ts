import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ProductService } from '../product.service';
import { ProductsService } from '../../../APIServices/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../../helpers/validateform';
import { AuthService } from '../../../APIServices/auth.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    description: ''
  };
 
//from Validation
AddProductForm!:FormGroup;//declare formgroup
constructor(private fb:FormBuilder,private auth:AuthService,private productService: ProductsService,private router: Router){} //inject form builder
 
ngOnInit():void{
  this.AddProductForm=this.fb.group({
    Name:['',Validators.required],
    Price:['',Validators.required],
    marketPrice:['',Validators.required],
    imageURL:['',Validators.required]
  })
}

onAddProduct(){
    if(this.AddProductForm.valid){
      console.log(this.AddProductForm.value)
      //send the object to db
    this.productService.addProduct(this.AddProductForm.value)
    .subscribe({
      next:(res=>{  
        console.log(res)
        alert(res.data)
        this.AddProductForm.reset();
      })
      ,error:(err=>{
        alert(err?.error.message)
      })
    })
   
  
console.log(this.AddProductForm.value)
    }else{
      console.log('form is not valid');
      console.log(this.AddProductForm)
      ValidateForm.validateAllFormFields(this.AddProductForm);
      alert('Invlid Form ')
      //throw error using toaster and with required field
    }
  // onAddProduct() {
  //   this.productService.addProduct(this.product).subscribe(() => {
  //     this.router.navigate(['/admin/products']);
  //   });
  // }
}
}

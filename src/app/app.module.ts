import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes, provideRouter } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPWDComponent } from './forgot-pwd/forgot-pwd.component';
import { ResetPWDComponent } from './reset-pwd/reset-pwd.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { EmailVarificationComponent } from './email-varification/email-varification.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrdersComponent } from './admin/orders/orders.component';

import { AdminModule } from './admin/admin.module';
import { ProductsService } from './APIServices/products.service';
import { SharedService } from './shared.service';
import { authGuard } from './auth/auth.guard';
import { AuthService } from './APIServices/auth.service';

const appRoute:Routes=[  
  //{ path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
{path:'',component:HomeComponent},
 // {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'reset-pwd',component:ResetPWDComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-pwd',component:ForgotPWDComponent},
  {path:'home',component:HomeComponent},
  {path:'Products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'email-varify',component:CartComponent},
  { path: 'place-order', component: PlaceOrderComponent },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  //{ path: '**', redirectTo: '/admin/dashboard' },
  {path:'**',component:ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    ErrorComponent,
    FooterComponent,
    ForgotPWDComponent,
    ResetPWDComponent,
    ProductsComponent,
    CartComponent,
    EmailVarificationComponent,
    
    AdminComponent,
    DashboardComponent,
    // OrdersComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
     AdminModule,
    FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [AuthService, ProductsService,SharedService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

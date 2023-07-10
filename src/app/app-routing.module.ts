import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregiComponent } from './adminregi/adminregi.component';
import { HotalloginComponent } from './hotallogin/hotallogin.component';
import { HotalregiComponent } from './hotalregi/hotalregi.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerregiComponent } from './customerregi/customerregi.component';
import { combineLatest } from 'rxjs';
import { HotlogComponent } from './hotlog/hotlog.component';
import { HotregiComponent } from './hotregi/hotregi.component';
import { Home2Component } from './home2/home2.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SininComponent } from './sinin/sinin.component';
import { SinupComponent } from './sinup/sinup.component';
import { NecComponent } from './nec/nec.component';
import { AboutComponent } from './about/about.component';
import { Home3Component } from './home3/home3.component';




const routes: Routes = [
  {
    path:'',redirectTo:'dashboard/nec',pathMatch:'full'
  },
  {
    component:Home2Component,
    path:'home2',
    children:[
      {
        component:Home3Component,
        path:''
      },
      {
        component:ContactComponent,
        path:'contact'
      },
      {
      component:ServicesComponent,
      path:'services'
      },
      
      {
        component:AdminloginComponent,
        path:'adminlogin'
      },
      {
        component:AdminregiComponent,
        path:'adminregi'
      },
        {
          component:HotalloginComponent,
          path:'hotallogin'
        },
      {
        component:HotalregiComponent,
        path:'hotalregi'
      },
      {
      component:CustomerloginComponent,
      path:'customerlogin'
      },
      {
        component:CustomerregiComponent,
        path:'customerregi'
      },
      {
        component:HotlogComponent,
        path:'hotlog'
      },
      {
        component:HotregiComponent,
        path:'hotregi'
      },
      {
        component:AboutComponent,
        path:'about'
      },
      {
        component:Home3Component,
        path:'home3'
      }

      

    ]
  },
  {
    path:'dashboard',
    component:DashbordComponent,
    children:[
      {
        path:'',
        component:NecComponent
      },{
        path:'login',
        component:SininComponent
      },
      {
        path:'signup',
        component:SinupComponent
      },{
        path:'nec',
        component:NecComponent
      }
    ]
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

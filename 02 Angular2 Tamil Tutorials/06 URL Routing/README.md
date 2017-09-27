# URL Routing

- Here we looking for routing concepts
- How to create a component via terminal
	- **ng g c User**

- We need to create one file called ***app.routes.ts***

```javascript
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserComponent } from './user/user.component'
export const Approute: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

```
- In begining time itself we installed the router package.

```javascript
"@angular/router": "^3.4.0"
```
- We need to create one file called ***app.module.ts***

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

import { Approute } from './app.routes';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

- Adding link for sidebar menu using ***routerLink***

```html

<div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav side-nav">
        <li class="active">
            <a routerLink="/"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
        </li>
        <li>
            <a routerLink="/user"><i class="fa fa-fw fa-bar-chart-o"></i> User</a>
        </li>
        <li>
            <a routerLink="/reports"><i class="fa fa-fw fa-table"></i> Reports</a>
        </li>
    </ul>
</div>

```
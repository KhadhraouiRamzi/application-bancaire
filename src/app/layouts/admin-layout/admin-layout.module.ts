import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from 'src/app/pages/history/history.component';
import { ListBeneficiairesComponent } from 'src/app/pages/list-beneficiaires/list-beneficiaires.component';
import { NewBeneficiaireComponent } from '../../pages/new-beneficiaire/new-beneficiaire.component';
import { ListOperationsComponent } from '../../pages/list-operations/list-operations.component';
import { NewOperationComponent } from '../../pages/new-operation/new-operation.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    HistoryComponent,
    ListBeneficiairesComponent,
    NewBeneficiaireComponent,
    ListOperationsComponent,
    NewOperationComponent
  ]
})

export class AdminLayoutModule {}

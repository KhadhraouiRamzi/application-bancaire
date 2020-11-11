import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { HistoryComponent } from 'src/app/pages/history/history.component';
import { ListBeneficiairesComponent } from 'src/app/pages/list-beneficiaires/list-beneficiaires.component';
import { NewBeneficiaireComponent } from 'src/app/pages/new-beneficiaire/new-beneficiaire.component';
import { ListOperationsComponent } from 'src/app/pages/list-operations/list-operations.component';
import { NewOperationComponent } from 'src/app/pages/new-operation/new-operation.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'history/:id', component: HistoryComponent },
    { path: 'beneficiaries', component: ListBeneficiairesComponent},
    { path: 'new-beneficiary', component: NewBeneficiaireComponent},
    { path: 'operations', component: ListOperationsComponent},
    { path: 'new-operation/:idClient', component: NewOperationComponent},
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];

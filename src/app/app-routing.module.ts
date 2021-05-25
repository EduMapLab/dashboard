import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'home/dashboard',
        loadChildren: () => import('./theme/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'home/navigation',
        loadChildren: () => import('./theme/navigation/navigation.module').then(m => m.NavigationModule)
      },
      {
        path: 'home/widget',
        loadChildren: () => import('./theme/widget/widget.module').then(m => m.WidgetModule)
      },
      {
        path: 'ui/basic',
        loadChildren: () => import('./theme/ui-elements/basic/basic.module').then(m => m.BasicModule)
      },
      {
        path: 'ui/advance',
        loadChildren: () => import('./theme/ui-elements/advance/advance.module').then(m => m.AdvanceModule)
      },
      /*{
        path: 'ui/animations',
        loadChildren: () => import('./theme/ui-elements/animation/animation.module').then(m => m.AnimationModule)
      },*/
      {
        path: 'form',
        loadChildren: () => import('./theme/forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'table/bootstrap-table',
        loadChildren: () => import('./theme/table/bootstrap-table/bootstrap-table.module').then(m => m.BootstrapTableModule)
      },
      {
        path: 'table/tbl-datatable',
        loadChildren: () => import('./theme/table/tbl-datatable/tbl-datatable.module').then(m => m.TblDatatableModule)
      },
      {
        path: 'cm/charts',
        loadChildren: () => import('./theme/chart/chart.module').then(m => m.ChartModule)
      },
      {
        path: 'cm/map',
        loadChildren: () => import('./theme/map/map.module').then(m => m.MapModule)
      },
      {
        path: 'page/user',
        loadChildren: () => import('./theme/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'page/email',
        loadChildren: () => import('./theme/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'app/crm-contact',
        loadChildren: () => import('./theme/crm-contact/crm-contact.module').then(m => m.CrmContactModule)
      },
      {
        path: 'app/task',
        loadChildren: () => import('./theme/task/task.module').then(m => m.TaskModule)
      },
      {
        path: 'app/editor',
        loadChildren: () => import('./theme/extension/editor/editor.module').then(m => m.EditorModule)
      },
      {
        path: 'app/invoice',
        loadChildren: () => import('./theme/extension/invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'app/file-upload-ui',
        loadChildren: () => import('./theme/extension/file-upload-ui/file-upload-ui.module').then(m => m.FileUploadUiModule)
      },
      {
        path: 'app/full-event-calendar',
        loadChildren: () => import('./theme/extension/full-event-calendar/full-event-calendar.module').then(m => m.FullEventCalendarModule)
      },
      {
        path: 'other/simple-page',
        loadChildren: () => import('./theme/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'page/auth',
        loadChildren: () => import('./theme/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'page/maintenance/error',
        loadChildren: () => import('./theme/maintenance/error/error.module').then(m => m.ErrorModule)
      },
      {
        path: 'page/maintenance/coming-soon',
        loadChildren: () => import('./theme/maintenance/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)
      },
      {
        path: 'page/maintenance/offline-ui',
        loadChildren: () => import('./theme/maintenance/offline-ui/offline-ui.module').then(m => m.OfflineUiModule)
      },
      {
        path: 'page/email/email-template',
        loadChildren: () => import('./theme/email/email-template/email-template.module').then(m => m.EmailTemplateModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home/dashboard/default'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

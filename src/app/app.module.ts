import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/login/register/register.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { BorrowBookComponent } from './Components/borrow-book/borrow-book.component';
import { CategoryListComponent } from './Components/Category/category-list/category-list.component';
import { AuthorListComponent } from './Components/Author/author-list/author-list.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { AdvancedSearchDialogueComponent } from './shared/components/advanced-search-dialogue/advanced-search-dialogue.component';
import { BookManagementComponent } from './Components/Book/book-management/book-management.component';
import { BookFormComponent } from './Components/Book/book-form/book-form.component';
import { AuthorManagementComponent } from './Components/Author/author-management/author-management.component';
import { AuthorFormComponent } from './Components/Author/author-form/author-form.component';
import { CategoryManagementComponent } from './Components/Category/category-management/category-management.component';
import { CategoryFormComponent } from './Components/Category/category-form/category-form.component';
import { BorrowManagementComponent } from './Components/Borrow/borrow-management/borrow-management.component';
import { BorrowDialogComponent } from './Components/Borrow/borrow-dialog/borrow-dialog.component';
import { BorrowDetailsComponent } from './Components/Borrow/borrow-details/borrow-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    BookListComponent,
    BorrowBookComponent,
    CategoryListComponent,
    AuthorListComponent,
    SearchBarComponent,
    AdvancedSearchDialogueComponent,
    BookManagementComponent,
    BookFormComponent,
    AuthorManagementComponent,
    AuthorFormComponent,
    CategoryManagementComponent,
    CategoryFormComponent,
    BorrowManagementComponent,
    BorrowDialogComponent,
    BorrowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

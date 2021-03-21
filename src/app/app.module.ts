import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from "./list-item/list-item.component";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [AppComponent, ListComponent, ListItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

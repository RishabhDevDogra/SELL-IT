import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { InventoryRepository } from "./inventory.repository";
import { QuestionRepository } from "./question.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        InventoryRepository,
        QuestionRepository,
        RestDataSource,
        AuthService     
    ]
})

export class ModelModule { }
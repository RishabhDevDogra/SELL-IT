import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Inventory } from "../../models/inventory.model";
import { InventoryRepository } from "../../models/inventory.repository";
import { QuestionRepository } from "../../models/question.repository";
import { Question } from "../../models/question.model";


@Component({
    selector: "list-inventory",
    templateUrl: "list.component.html"
})

export class ListComponent {

    title = 'Product List';
    myDate = new Date().getTime();
    isexpired: boolean = true;
    

    constructor(private repository: InventoryRepository,
        private router: Router,
        private repository2: QuestionRepository) 
    { }

    get inventoryList(): Inventory[] {
        return this.repository.getInventory();        
    }

    get questionList(): Question[] {
        return this.repository2.getQuestion();        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("inventory/delete/"+id);
        }
    }

    isActive(enddate: Date): boolean {
        const expireDate = enddate.getTime();
        if (

          new Date().getTime() <= expireDate
        ) {
          return true;
        } else {
          return false;
        }
      }
    
}
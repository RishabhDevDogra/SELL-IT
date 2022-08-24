import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Inventory } from "../../models/inventory.model";
import { InventoryRepository } from "../../models/inventory.repository";
import { QuestionRepository } from "../../models/question.repository";
import { Question } from "../../models/question.model";
import { AuthService } from 'src/app/models/auth.service';


@Component({
    selector: "add-edit",
    templateUrl: "question.component.html"
})

export class QuestionComponent {
    
    title:string = 'Question an Item';
    editing: boolean = false;
    comment: Question = new Question();
    item: Inventory = new Inventory();
    activeRoute: ActivatedRoute;
    isowner: boolean = false;


    constructor(private repository: QuestionRepository,
                private repository2: InventoryRepository,
                private router: Router,
                activeRoute: ActivatedRoute,
                public auth: AuthService,) 
    { 
        // Edit

            this.item = this.repository2.getItem(activeRoute.snapshot.params["id"]);
           
            this.editing = activeRoute.snapshot.params["mode"] == "edit";



        
            // Edit
            if (this.editing) {
                this.comment = this.repository.getComment(activeRoute.snapshot.params["id"]);

                this.isowner = auth.username == this.comment.ownername;
            } else {

        // Question

            this.comment = new Question();
            }
              
    }
    
    get inventoryList(): Inventory[] {
        return this.repository2.getInventory();        
    }
    
    question(form: NgForm) {
        this.repository.saveQuestion(this.comment);
        this.router.navigateByUrl("inventory/list");                
    }


    
}
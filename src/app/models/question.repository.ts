import { Injectable } from "@angular/core";
import { Question } from "./question.model";
import { Inventory } from "./inventory.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class QuestionRepository {

    private question: Question[] = [];
    private inventory: Inventory[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getQuestionList().subscribe(data => {
            this.question = data;
        });
    }

    getQuestion(): Question[] {
        return this.question;
    }

    getItem(id: string): Inventory {
        return (this.inventory.find(item => item._id === id)!);
    }

    getComment(id: string): Question {
        return (this.question.find(comment => comment._id === id)!);
    }

    async saveQuestion(comment: Question) {

        // If it does not have id, then create a new item.
        if (comment._id == null || comment._id == "") {
            this.dataSource.insertQuestion(comment)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.question.push(response);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateQuestion(comment).subscribe(response => {
                if (response.success) {
                    this.question.splice(this.question.
                        findIndex(i => i._id == comment._id), 1, comment);
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
    }
    }
}
export class Question {

    constructor(
        public _id?: string,
        public item?: string,
        public itemid?: string, 
        public comment?: string,
        public created?: Date,
        public answer?: string,
        public ownername?: string,
    ){}

}

export class FriendAge {
    constructor(name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }   

    returnAge(){
        const today = new Date();
        let age = today.getFullYear() - this.year;
        let monthAct = today.getMonth();
        let dayAct = today.getDate();
        let monthBirthday = Number (this.month);

        if(monthAct + 1 < monthBirthday){
            age -= 1;
        }

        if(monthAct + 1 === monthBirthday){
            if(dayAct < this.day){
                age -= 1;
            }
        }

        return `${this.name} is ${age} today!`;
    }
}
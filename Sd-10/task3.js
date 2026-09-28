export function ageCalculator(year, month, day) {
    const today = new Date();
    let age = today.getFullYear() - year;
    let monthAct = today.getMonth();
    let dayAct = today.getDate();
    let monthBirthday = Number (month);

    if(monthAct + 1 < monthBirthday){
        age -= 1;
    }

    if(monthAct + 1 === monthBirthday){
        if(dayAct < day){
            age -= 1;
        }
    }

    return age;
}
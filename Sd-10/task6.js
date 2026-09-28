export function rubricExcellent(note) {
    note = Number(note);
    let decision;

    if(note >= 9){
        decision = "Excellent";
    } else if(note >= 5){
        decision = "Pass";
    } else{
        decision = "Fail";
    }

    return decision;
}
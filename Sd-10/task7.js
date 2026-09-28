export function rubricPerfect(note) {
    note = Number(note);
    let decision;

    if(note === 11){
        decision = "Perfect";
    } else if(note >= 9){
        decision = "Excellent";
    } else if(note >= 5){
        decision = "Pass";
    } else{
        decision = "Fail";
    }

    return decision;
}
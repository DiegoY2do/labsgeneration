export function rubricPassFail(note) {
    note = Number(note);
    let decision;

    if(note >= 5){
        decision = "Pass";
    } else{
        decision = "Fail";
    }

    return decision;
}
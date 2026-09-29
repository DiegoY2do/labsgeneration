// Task 4: delUser(number)
/*
export function delUser(number){
    fetch(`http://localhost:3000/users/${number}`,
    {
        method: "DELETE",
        }
    );   
}
*/

let deleteQueue = Promise.resolve();

export function delUser(number) {

    deleteQueue = deleteQueue
        .then(() => {
            return fetch(`http://localhost:3000/users/${number}`, {
                method: "DELETE"
            });
        })
        .then(() => {
            if (number === 5) {
                return fetch("http://localhost:3000/users")
                    .then(response => response.json())
                    .then(data => console.log(data));
            }
        });

    return deleteQueue;
}
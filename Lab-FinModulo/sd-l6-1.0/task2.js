// Task 2: listUsers()
/*
export function listUsers(){
    fetch("http://localhost:3000/users").then(response => response.json()).then(data => console.log(data));
}*/

export function listUsers() {
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {
            console.log("[");

            data.slice(0, 4).forEach((user, index) => {
                console.log("{");
                console.log(`  id: ${user.id},`);
                console.log(`  first_name: '${user.first_name}',`);
                console.log(`  last_name: '${user.last_name}',`);
                console.log(`  email: '${user.email}'`);

                if (index < 3) {
                    console.log("},");
                } else {
                    console.log("}");
                }
            });

            console.log("]");
        });
}
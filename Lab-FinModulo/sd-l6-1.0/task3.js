// Task 3: addUser(first_name, last_name, email)

export function addUser(first_name, last_name, email) {

    return fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(usuarios => {
            const ids = usuarios.map(item => item.id);
            const mayorId = Math.max(...ids);
            const nuevoId = mayorId + 1;

            const nuevoUsuario = {
                id: nuevoId,
                first_name: first_name,
                last_name: last_name,
                email: email
            };

            return fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoUsuario)
            });
        })
        .then(response => response.json())
        .then(data => console.log(data));
}
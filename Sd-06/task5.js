function FriendsList(){
     this.list = [];
}

const friend = new FriendsList();

for(let i = 0; i < process.argv[3]; i++){
    friend.list.push(process.argv[i + 4]); 
}

console.log(friend.list);

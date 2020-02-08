/*
//coding javascript untuk objek
const person = {
    firstName : 'Krisman',
    lastName : 'Zebua',
    age : 24,
    hobby : ['Music','Badminton','Reading'],
    address : {
        jalan:'H.Jaip',
        kel:'Krukut',
        kota:'Depok'
    } 
}
person.email='krismananugerah@gmail.com';
const {firstName,lastName, hobby, address:{jalan,kel,kota},email} = person;
console.log('Nama Saya ' + firstName + ' Alamat saya di Jalan ' +jalan+ ' kirim pesan ke alamat email saya ' +email);
*/

//Todo list
const todos = [
    {
        id:1,
        text:'Membaca',
        complete:true
    },
    {
        id:2,
        text:'Rapat Proyek',
        complete:true
    },
    {
        id:3,
        text:'Membuat Desain',
        complete:false
    },
];
/*
//FOR Condition
for(let i=1;i<11;i++){
    console.log(i);
    
};

//While Condition
let i=0;
while(i<10){
    console.log(`While Loop Number : ${i}`);
    i++;
}
*/

//Looping
/*
for(let todo of todos){
    console.log(todos[0].text);
    
}
*/



//map
const todoCompleted = todos.filter(function(todo){
    return todo.complete === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

const fs = require('fs');

const newUser = {
    id:1,
    name: 'Biscut',
    age:10
};
//------------add data to json------------------------------------------
//read file
// fs.readFile('data.json', (err,data) =>{
//     if (err) {
//         console.log(err);
//         return;
//     }


// //convert json to js object
// const jsonData = JSON.parse(data);


// //add new data
// jsonData.users.push(newUser);

// fs.writeFile(
//     'data.json',
//     JSON.stringify(jsonData,null,2),
//     (err)=>{
//         if (err){
//             console.log(err);
//         }else{
//             console.log('Data addede successfully.')
        
//         }
//     }
// );
// });


//-----------------modify data--------------------
// fs.readFile('data.json',(err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }

//     const jsonData= JSON.parse(data);

//     const task= jsonData.users.find(t=> t.id===2);
//     task.age=20

//     fs.writeFile('data.json',
//         JSON.stringify(jsonData,null,2),
//         (err)=>{
//             if (err){
//             console.log(err);}
        
//         else{
//             console.log('Data modified sucessfully');
//             console.log(task);
//         }
//     }
//     );
// });

// ----------------Delete data----------------------------

// fs.readFile('data.json', (err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }

//     const jsonData= JSON.parse(data);

//    jsonData.users= jsonData.users.filter(t=> t.name!=="Biscut");
//     // console.log(jsonData);
//     fs.writeFile('data.json',
//     JSON.stringify(jsonData,null,2),
//     (err)=>{
//         if (err){console.log(err);}
//         else { console.log("data deleted sucessfully");}
//     });


// });
const fs = require('fs');

// const newUser = {
//     id:1,
//     name: 'Biscut',
//     age:10
// };
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

//------------------------------------------
const readLine= require('readline');
const { json } = require('stream/consumers');

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function readFile(fileName, progressName){
    // jsonData = parseFile(fileName);
    // console.log(jsonData);
        fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        const jsonData= JSON.parse(data);
        if (!progressName){
            console.log(jsonData.tasks);
        }else{
        console.log(jsonData.tasks.filter(t=>t.Status==progressName));}
        return;
    })
}
// function parseFile(fileName){
//     fs.readFile(fileName,(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }

//     const jsonData= JSON.parse(data);

//     return jsonData;
//     })
// }
function writeFile(fileName,jsonData){
    fs.writeFile(fileName,
        JSON.stringify(jsonData,null,2),
        (err)=>{
            if (err){console.log(err);
                return 0;
            }
            return 1;
        }
    )
}
r1.question('What do you want to do? enter the number\n1. Add Task\n2. Update Task\n3. Show all tasks\n4. Show completed task\n5. Show in Progress tasks\n6. Show uncompleted task\n7. Delete task\n8. Exit\n Number: ', name=>{
 
    name=Number(name);
;
    switch (name){
        case 1:
            fs.readFile('data.json',(err,data)=>{
                if (err){
                    console.log(err);
                    return;
                }
            const jsonData= JSON.parse(data);
            // const lastTask= jsonData.tasks.at[-1];
            const lastTask= jsonData.tasks[jsonData.tasks.length-1];
            var ids= lastTask.id;
            ids+=1;
            r1.question('Write Task:',newTask=>{
            
            const newtask={
                id:ids,
                Task: newTask,
                status:'not started'
            };
                   
            jsonData.tasks.push(newtask);
            fs.writeFile('data.json',
                JSON.stringify(jsonData,null,2),
                (err)=>{
                    if (err){
                    console.log(err);
                }
                else{console.log('Task added sucessfully with status not started.');}
            
            }
            )
            })
           
            });
            break;
        case 2:
            readFile('data.json');
            r1.question('which task do you want to update?', ids=>{
                r1.question('what do you want to update? Task(t) or Status(s):',value=>{
                    if (value=='t'){
                        r1.question('Enter Task:', newTask=>{
                            fs.readFile('data.json',(err,data)=>{
                                jsonData=JSON.parse(data);
                                indexofTask=jsonData.tasks.findIndex(t=>t.id==ids);
                                // console.log(jsonData.tasks[indexofTask]);
                                jsonData.tasks[indexofTask].Task=newTask;
                                fs.writeFile('data.json',
                                    JSON.stringify(jsonData,null,2),
                                    (err)=>{
                                        if (err){console.log(err);}
                                        else{console.log("sucessfully updated Task!!!");}
                                    }
                                )
                            })
                           
                           
                        })
                    }
                    else if (value=='s'){
                        r1.question('Enter Status:', newStatus=>{
                            fs.readFile('data.json',(err,data)=>{
                                jsonData=JSON.parse(data);
                                indexofTask=jsonData.tasks.findIndex(t=>t.id==ids);
                                jsonData.tasks[indexofTask].Status=newStatus;
                                fs.writeFile('data.json',
                                    JSON.stringify(jsonData,null,2),
                                    (err)=>{
                                        if (err){console.log(err);}
                                        else{console.log("sucessfully updated Task!!!");}
                                    }
                                )
                            })
                           
                           
                        })
                    }
                })
            })
            break;
        case 3:
           readFile('data.json');
            break;
        case 4:
            readFile('data.json','completed');
            break;
        case 5:
            readFile('data.json','in progress');
            break;
        case 6:
            readFile('data.json','not started');
            break;
        case 7:
            readFile('data.json');
            r1.question('Which task do you want to delete? : ', a=>{
                fs.readFile('data.json',(err,data)=>{
                if (err){
                    console.log(err);
                    return;
                }
            const jsonData= JSON.parse(data);
            jsonData.tasks= jsonData.tasks.filter(t=>t.id!=a);
            console.log(jsonData.tasks);
               
            fs.writeFile('data.json',
                JSON.stringify(jsonData,null,2),
                (err)=>{
                    if (err){ console.log(err);}
                    else{console.log(`id ${a}'s task deleted sucessfully`);}
                }
            )
                })
            })


            break;
        case 8:
            break;
        default:
            console.log('Wrong input!!!');
            
    }
    // r1.close();
})

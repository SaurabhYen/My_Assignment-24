let inputSectEl=document.getElementById('inputSect');
let mylistContinerEl=document.getElementById('mylistContiner');
let addBtnEl=document.getElementById('addBtn');
let SaveBtnEl=document.getElementById('SaveBtn');

// let todoList=[
//    {
//        title:'HTML',
//        id:1
//    },
//    {
//        title:'CSS',
//        id:2
//    },
//    {
//        title:'BOOTSTRAP',
//        id:3
//    }
// ];


let todoList;
   

function getTodolist(){
    let getTodo=localStorage.getItem('mytodo');
    if(getTodo===null){
        return [];
    }
    else{
        let todoParse=JSON.parse(getTodo)
        return todoParse;
    }
}
todoList=getTodolist();


    SaveBtnEl.addEventListener('click',()=>{
     let todoStr=JSON.stringify(todoList);
     let setTodo=localStorage.setItem('mytodo',todoStr);
    });


    



function printTodo(todo){
  
   let listItem=document.createElement('li');
       listItem.classList.add('listItem');
       mylistContinerEl.appendChild(listItem);

   let checkBox=document.createElement('input');
       checkBox.type='checkbox'; 
       checkBox.id=todo.id;
       listItem.appendChild(checkBox);
       

   let labelEl=document.createElement('label');
       labelEl.htmlFor=checkBox.id;
       labelEl.classList.add('labeleEl');
       listItem.appendChild(labelEl);

   let titleEl=document.createElement('h2');  
       titleEl.classList.add('headingClass'); 
       titleEl.innerText=todo.title;
       labelEl.appendChild(titleEl);

   let dltBtnEl=document.createElement('button');
       dltBtnEl.classList.add('dltBtnElClass'); 
       labelEl.appendChild(dltBtnEl);
       dltList(dltBtnEl,listItem,todo)
   let iconEl=document.createElement('button');
       iconEl.classList.add('fa-solid' ,'fa-trash'); 
       dltBtnEl.appendChild(iconEl);   

       selectch(checkBox,titleEl,todo);
       if(todo.isChecked==true){
        titleEl.classList.add('headingElClass');
        checkBox.checked=true;
       }
       
       

}

function selectch(checkBox,titleEl,todo){
    checkBox.addEventListener('click',()=>{
        if(checkBox.checked===true){
           titleEl.classList.add('headingElClass');
        }
        else{
           
            titleEl.classList.remove('headingElClass');
        }

     let indexOfTodo=todoList.findIndex((e)=>{
            if(e.id===todo.id){
                return todo;
            }
        });
        console.log(indexOfTodo)
       
       
            if(todoList[indexOfTodo].isChecked===true){
                
                 todo.isChecked=false;
            }
            else{
               
                todo.isChecked=true;
            }

           
        
        
    });
   
    

}

// adding new todo from Input field

function dltList(dltBtnEl,listItem,todo){
    dltBtnEl.addEventListener('click',()=>{
         mylistContinerEl.removeChild(listItem);

         todoList=todoList.filter((e)=>{
            if(e.id!==todo.id){
                return e.id;
            }
        })
    });
    
}


addBtnEl.addEventListener('click',()=>{
    
    let inputValue=inputSectEl.value;
    let date =new Date();
     let newTodo={
        title:inputValue,
        id:'title'+date.getTime(),
        isChecked:false
     }
      
      todoList.push(newTodo);
      printTodo(newTodo);
      inputSectEl.value='';
});


for(todo of todoList){
   printTodo(todo);
}
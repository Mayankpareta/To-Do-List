const titleInput = document.querySelector("#item1");
const descInput = document.querySelector("#item2");
const btn = document.querySelector('button')
const toDo = document.querySelector(".todo");

btn.addEventListener("click" , 
    
    () => {     
        if(item1.value === '' || item2.value === '') {
                
        }else{
            listItem(item1.value , item2.value);
            item1.value = '';
            item2.value = '';
        }
    }    
    
)

let listItem = (item1 , item2) => {
    let saveDiv = document.createElement('div');  
    saveDiv.innerHTML = `
               <div class="save-div">
                     <h2 id="save-title">                     
                        ${item1}
                     </h2>
                     <h5 id="save-desc" >
                           ${item2}                           
                     </h5>
                    </div>`;
    

    saveDiv.addEventListener('click' , 
        () => {
            let deleteDivId = document.querySelector('.save-div');                
            if(deleteDivId.classList == 'save-div') {
                deleteDivId.classList.remove('save-div');
                deleteDivId.classList.add('done');
            }else{   
                deleteDivId.classList.add('done');
            }
        }
    )

     
     
    //  saveDiv.querySelector('i').addEventListener(
    //     "click",
    //     () => {
    //         saveDiv.remove()
    //     }
    //  )
     toDo.appendChild(saveDiv)
}







// self try to make todo

// const input = document.querySelector('#item');
// const todo = document.querySelector(".todo");

// input.addEventListener('keyup' , 
//     (event) => {
//         if(event.key === 'Enter') {
//             listItem(item.value);
//             item.value = "";
//         }
        
//     })

// function listItem(item) {
//     let list = document.createElement('li');
//     list.innerHTML = ` ${item}`;
//     todo.appendChild(list);
    
//     let btn = document.querySelector('.btn');
//     btn.addEventListener('click' , () => {
//         if(list.classList == 'done') {
//             list.classList.remove('done');
//         }else{   
//             list.classList.add('done');
//         }
//     })
// }







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

     toDo.appendChild(saveDiv);
};







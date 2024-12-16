
let notearea = document.querySelector(".note-area");
let noteText = document.querySelector(".note-text");
let title = document.querySelector(".title");
let note = document.querySelector(".note");
let notes = document.querySelector("#notes");


const showNoteArea = () => {
    noteText.style = 'display:block';
    notearea.classList.add('note-now')
    title.setAttribute('placeholder' ,'Title');
    title.style = 'font-size:20px';
}

const hideNoteArea=()=>{
    noteText.style= 'display:none';
    notearea.classList.remove('note-now');
    
}

AddNoteLocalStorage = (note)=>{
    if(note.length < 0){
        return;
    }
   console.log (note);

    let OldNote;
if(localStorage.getItem("notes") === null){
    OldNote= [];
    
}
    else{
        OldNote =JSON.parse(localStorage.getItem('notes'));
    }
    OldNote.push(note)
    localStorage.setItem('notes',JSON.stringify(OldNote));
}

const GetNotesFormLocalStorage = () => {

    let OldNote;
    if(localStorage.getItem("notes") === null){
        OldNote= [];
        
    } else{
        OldNote =JSON.parse(localStorage.getItem('notes'));
    }
    OldNote.forEach(note => {
        
        notes.innerHTML +=`<div class="note" id="note">
                <h3 class="title-text" id="title-text">${note[0]}</h3>
                <p class="note-blog">${note[1]}</p>
                <i class="fa fa-trash"></i>
            </div>`;
    });
}


const deletedNoteFromLocalStorage=(deletedNote) => {

    let OldNote;
    
    if(localStorage.getItem("notes") === null){
        OldNote= [];
        
    } else{
        OldNote =JSON.parse(localStorage.getItem('notes'));
    }
    OldNote.map((note,index) => {
       
        if(note[0]==deletedNote.children[0].textContent && note[1]==deletedNote.children[1].textContent){

            OldNote.splice(index,1)
            return OldNote;
        }
    });
     localStorage.setItem('notes',JSON.stringify(OldNote));
}

document.addEventListener('DOMContentLoaded',GetNotesFormLocalStorage);

AddNote = (t,n) => {
    notes.innerHTML +=`<div class="note" id="note">
                <h3 class="title-text" id="title-text">${t}</h3>
                <p class="note-blog">${n}</p>
                <i class="fa fa-trash"></i>
            </div>`

            title.value= '';
            noteText.value ='';
}

notearea.addEventListener("click",showNoteArea);

document.addEventListener('click',(event) => {

    let isclick=notearea.contains(event.target);
    if(!isclick){
        hideNoteArea();

        if(title.value.length === 0 && noteText.value.length === 0){
        
            return; 

        }else{
            AddNoteLocalStorage([title.value, noteText.value]);

            AddNote(title.value, noteText.value);
        }
    }
});

    document.addEventListener('mouseover',(event)=>{

        if(event.target.classList.contains("note")){
            event.target.querySelector("i").classList.add("show");
        }
    });

    document.addEventListener('mouseout',(event)=>{

        if(event.target.classList.contains("note")){
            event.target.querySelector("i").classList.remove("show");
        }
    });

    document.addEventListener('click',(event)=>{

        if(event.target.classList.contains("fa-trash")){
            event.target.parentElement.remove();
            deletedNoteFromLocalStorage(event.target.parentElement);
        }
    });



    // localStorage.setItem('name','Abdiriak');
    // localStorage.setItem('age', '18')

    // console.log(localStorage.getItem('name'));
    // console.log(localStorage.getItem('age'));
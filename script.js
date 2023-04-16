// ADD ITEMS TO OUR NOTE MANAGER
let button = document.getElementById('add-btn');
button.addEventListener('click', function(even){
    even.preventDefault();    
        let input = document.getElementById('add-input').value;
        if(input!==''){
            let liste = document.getElementById('list');
            let li = document.createElement('li');
            let para = document.createElement('p');
            para.textContent = input;
            li.appendChild(para);
            let para2 = document.createElement('p');
            let editer = document.createElement('i');
            editer.classList.add("fa","fa-pencil-square-o");
            let suprr = document.createElement('i');
            suprr.classList.add("fa","fa-times");
            para2.appendChild(editer);
            para2.appendChild(suprr);
            li.appendChild(para2);
            let input2 = document.createElement('input');
            input2.setAttribute('class','edit-note');
            input2.setAttribute('type','text');
            li.appendChild(input2);
            liste.appendChild(li);
            document.getElementById("add-input").value=''
        }
});
// EDIT AND DELETE ITEMS
let liste2 = document.querySelector('ul')
liste2.addEventListener('click',function(e){
    if(e.target.classList[1]==='fa-pencil-square-o'){
        let varparent = e.target.parentNode;
        varparent.style.display='none';
        let next = varparent.nextElementSibling
        let previous = varparent.previousElementSibling;
        console.log(previous);
        next.style.display='block';
        next.value=previous.textContent;
        next.addEventListener('keypress', function(e){
            if(e.keyCode===13){
                if(next.value!=''){
                    previous.textContent=next.value;
                    varparent.style.display='block';
                    next.style.display='none';
                    previous.textContent = next.value;
                }
                else{
                    next.parentNode.style.display='none';
                }
            }
        });
    }
    //DELETING NOTE IN OUR NOTE MANAGER
    if(e.target.classList[1]==='fa-times'){
    e.target.parentNode.parentNode.style.display='none';
    }
});
//HIDE AND UNHIDE OUR NOTES
let hide = document.getElementById('hide-list').firstElementChild;
hide.addEventListener('click', function(){
    if(hide.textContent==='Hide notes'){
        liste2.style.display='none';
        hide.textContent="Unhide notes";
    }
    else{
        liste2.style.display='block';
        hide.textContent="Hide notes";
    }
})

//search filter function for our program 
searchInput = document.querySelector('#search-note input')
console.log(searchInput);
searchInput.addEventListener('keyup', function(e){
    let searchar = e.target.value.toUpperCase();
    let notes = liste2.getElementsByTagName('li');
});
const newtask = document.querySelector('input');
const submit = document.querySelector('#submit');
const div = document.querySelector('.new');


submit.addEventListener('click', function (e) {

    const li = document.createElement('li');
    const p = document.createElement('p');
    const done = document.createElement('img');
    const span = document.createElement('span');
    const edit = document.createElement('img');
    const remove = document.createElement('img')
    const value = document.createTextNode(newtask.value);


    edit.className = "edit-img";
    remove.className = "remove-img";
    done.className = "done-task";
    span.id = "text"


    done.src = "assests/check.png";
    edit.src = "assests/edit.png";
    remove.src = "assests/d.png";


    span.appendChild(value);
    p.appendChild(done);
    p.appendChild(span);
    p.appendChild(edit);
    p.appendChild(remove);
    li.appendChild(p);
    div.appendChild(li);

    newtask.value = "";

    alert("the task was added successfully");










    // DELETE TASK
    const delBtns = document.querySelectorAll('.remove-img');

    delBtns.forEach(function (del) {
        del.addEventListener('click', function (e) {

            const parent = e.target.parentElement;
            const p = parent.parentElement;
            if (p) {
                p.remove();
            }
        });
    });








    // TASK COMPLETED

    const doneBtns = document.querySelectorAll('.done-task');

    doneBtns.forEach(function (d) {
        d.addEventListener('click', function (e) {

            const pa = e.target.parentElement;
            const pp = pa.parentElement;
            if (pp) {
                pp.style.backgroundColor = "blue"

            }
            if (pp.style.backgroundColor === "blue") {
                alert("The task was completed successfully !");
            }
        });


    });











    //UBDATE TASK 
    // .contains() is a JavaScript method that checks if one element is inside another.



    const editBtns = document.querySelectorAll('.edit-img');

    editBtns.forEach(function (editBtn) {
        editBtn.addEventListener('click', function (e) {
            const parent = e.target.parentElement;
            console.log(parent);


            const replace = document.createElement('span');
            replace.id = "text";
            replace.className = "newtext";
            replace.style.width = '400px';
            replace.style.margin = '10px';


            const textElement = parent.querySelector('#text');

            if (textElement) {

                const newText = prompt("Enter the new text:", textElement.textContent);


                // if (newText !== null) {

                replace.textContent = newText;


                textElement.replaceWith(replace);
                // }

               if(parent.contains(replace)){
                alert("the task was updated successfully! ");
               }
            }
        
        });
    });

   











});






















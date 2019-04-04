
const submitButton =  document.getElementById('input-button');
const toDolist     =  document.getElementById("toDoList");
const doneList     =  document.getElementById('doneList');
const subj         =  document.getElementById('subj');
const desc         =  document.getElementById('desc');




submitButton.addEventListener('click', (e) => {  e.preventDefault();
  const el = handleInput(subj.value, desc.value);
  if (!el) return;
  
  el.addEventListener('click', () => {  makeRemoveButton(el); moveToDone(el); }); 
  subj.value = ""; 
  desc.value = "";
  toDolist.prepend(el);
});

const makeItem = (subj, desc) => {

  let item = document.createElement('div');
      item.className = 'item';
                
  let subject = document.createElement('p');
      subject.className = 'item-subject';
      subject.textContent = subj;
                
  let description = document.createElement('p');
      description.className = 'item-desc';
      description.textContent = desc; 

  let timeStamp = document.createElement('small');
      timeStamp.className = 'item-timestamp';
      timeStamp.textContent = new Date().toDateString();
  
  let doneSymbol = document.createElement('p');
      doneSymbol.className ='pending';
      doneSymbol.textContent = '(pending)';
      
      item.append(subject, description, timeStamp, doneSymbol);
 
  return item;
}

const handleInput = (title, desc) => {
  invalid = document.getElementById('invalidInput') 
  if(title === '' && desc === '') {
    invalid.style.display = 'block';
    return;
  }
  invalid.style.display = 'none';
  return makeItem(title, desc);
}

const moveToDone = (item) => {
  if(!item.parentNode.id === 'toDolist') return;
  toDolist.removeChild(item);
  doneList.appendChild(item);
}
  
makeRemoveButton = (targetDiv) => {
    if (targetDiv.classList.contains('done')) return;
        targetDiv.className += ' done';
        targetDiv.getElementsByClassName('pending')[0].innerHTML = 'done!';

    let removeBtn = document.createElement('button');
        removeBtn.type = 'button'
        removeBtn.innerHTML = 'X';
        removeBtn.className = 'item-remove'; 
        removeBtn.addEventListener('click', () => removeItem(targetDiv));
        targetDiv.append(removeBtn);
}

const removeItem = (item) => {
  item.style.opacity = '0'; 
  setTimeout(() => {item.parentNode.removeChild(item)}, 500);
}
  



A simple TODO app using vanillaJS

Known problems: 

* Bug on todo.js: 76 :
  - Should check condition before attempting to removeChild();
  - the problem appears when moveToDone() is called on line 14.

* Add Button theme.css :
  - Button should be scaled on wider views
  - Button should have only two different styles: round or square
  - look over layout & grid settings for input field.
  - Possibly animated

* Change settings for removeButton todo.js : 64
  - instead of adding/removing, button can be hidden

* localStorage todo.js :
  - should be possible to save content

  -> check if there is any data in localStorage('toDo': {title, desc})
  -> check if there is any data in localStorage('done': {title, desc})

  -> parse the data from localStorage in objects inside 2 arrays
  -> iterate through the arrays and pass key ('title', 'desc') to makeItem and moveItem

  -> set data to localStorage with the eventlistener
  -> remove data from localStorage with removeItem

* Cursor is sometimes changing??





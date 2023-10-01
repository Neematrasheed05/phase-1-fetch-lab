function fetchBooks() {

    // Make a fetch request to the Game of Thrones API
    fetch('https://anapioficeandfire.com/api/books')
      .then(response => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Convert the response to JSON
        return response.json();
      })
      .then(data => {
        // Call the renderBooks() function and pass in the JSON data
        renderBooks(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
      
    const booksList = document.getElementById('books-list');
    // Loop through the data and create list items for each book
      data.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book.name;
        booksList.appendChild(listItem);
      });
    }
)};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// src/services/booksService.js

const books = [
  { id: '1', title: 'Dune', author: 'Frank Herbert' },
  { id: '2', title: 'Neuromancer', author: 'William Gibson' },
];

export async function fetchInitialBooks() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...books]), 500);
  });
}

export async function postBook(book) {
  return new Promise((resolve) => {
    setTimeout(() => {
      books.push(book);
      resolve({ success: true });
    }, 500);
  });
}

export async function connectToBooksChannel(callback) {
  // Simulated real-time stream
  let intervalId = setInterval(() => {
    // Simulate no-op or new book randomly
    if (Math.random() < 0.2) {
      const fakeBook = {
        id: Date.now().toString(),
        title: 'Fake Book ' + Math.floor(Math.random() * 1000),
        author: 'Bot Author',
      };
      books.push(fakeBook);
      callback(fakeBook);
    }
  }, 1000);

  return {
    close() {
      clearInterval(intervalId);
    },
  };
}

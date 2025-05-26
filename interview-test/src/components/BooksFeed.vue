<template>
    <div>
      <h2>Books Feed (Real-Time)</h2>
  
      <form @submit.prevent="publishBook">
        <input v-model="title" placeholder="Book Title" required />
        <input v-model="authorr" placeholder="Author" required />
        <button type="submit">Publish</button>
      </form>
  
      <h3>All Books</h3>
      <ul>
        <li v-for="b in books" :key="b.uuid">{{ b.title }} — {{ b.author }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { fetchInitialBooks, postBook, connectToBooksChannel } from '@/services/BookService';
  
  const books = ref([]);
  const title = ref('');
  const author = ref('');
  let channel = null;
  
  async function publishBook() {
    const newBook = {
      id: Date.now().toString(),
      title: title.value,
      author: author.value,
    };
  
    await postBook(newBook);
  
    // BUG: Duplicate entry due to double push (once here and again via channel)
    books.value.push(newBook);
  
    title.value = '';
    author.value = '';
  }
  
  onMounted(async () => {
    const initial = await fetchInitialBooks();
  
    // BUG: Missing await keyword (initial will be a Promise, not data)
    books.value = initial;
  
    channel = await connectToBooksChannel((incomingBook) => {
      books.value.push(incomingBook);
    });
  });
  
  onBeforeUnmount(() => {
    if (channel) channel.clos(); // BUG: Typo: should be .close()
  });
  </script>
  
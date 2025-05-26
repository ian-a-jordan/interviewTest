// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from '../components/TheWelcome.vue';
import BooksFeed    from '../components/BooksFeed.vue';

const routes = [
  { path: '/',      component: TheWelcome },
  { path: '/books', component: BooksFeed },
  // later: /food, /movies, /music…
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'


</script>

<template>
  <div class="welcome-grid">
    <router-link to="/books" class="no-underline">
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Get Good Books</template>
        Click here to go to the live books feed.
      </WelcomeItem>
    </router-link>

    <router-link to="/food" class="no-underline">
      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Try Good Food</template>
        Explore some excellent recipes and restaurant picks from around the world. Click
        <a href="https://www.allrecipes.com/" target="_blank" rel="noopener">here</a>
        to start your culinary journey.
      </WelcomeItem>
    </router-link>

    <router-link to="/movies" class="no-underline">
      <WelcomeItem>
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>Watch Good Movies</template>
        Want some amazing film recommendations? Check out
        <a href="https://letterboxd.com/" target="_blank" rel="noopener">Letterboxd</a>
        or browse our movie section for must-watch titles.
      </WelcomeItem>
    </router-link>

    <router-link to="/music" class="no-underline">
      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Listen to Good Music</template>
        Whether you like indie, jazz, or synthwave, there's something for you. Browse curated playlists or
        <a href="https://www.spotify.com/" target="_blank" rel="noopener">open Spotify</a>
        to explore.
      </WelcomeItem>
    </router-link>
  </div>
</template>

<style scoped>
.welcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.no-underline {
  text-decoration: none;
  color: inherit;
}
</style>

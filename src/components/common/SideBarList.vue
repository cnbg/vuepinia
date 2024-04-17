<script setup>
import Icon from '@/components/common/Icon.vue'
import { useNoteStore } from '@/stores/NoteStore'

defineProps(['notes', 'title', 'icon'])

const noteStore = useNoteStore()
</script>

<template>
  <h4 class="rs__sidebar-title">
    <Icon :icon="icon" fill="inherit" :clickable="false" />
    <span class="ml-5p">{{ title }}</span>
  </h4>
  <hr class="rs__notes-divider" />
  <ul class="rs__note-list">
    <li v-for="note in notes" :key="note.id">
      {{ note.title }}
      <Icon class="invisible" fill="inherit"
            @click="noteStore.togglePin(note)"
            :icon="note.pinned ? 'bookmark-remove': 'bookmark-add'" />
    </li>
  </ul>
</template>

<style scoped>

</style>

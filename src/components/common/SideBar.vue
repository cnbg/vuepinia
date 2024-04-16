<script setup>
import Icon from '@/components/common/Icon.vue'
import { useNoteStore } from '@/stores/NoteStore.js'

const noteStore = useNoteStore()
</script>

<template>
  <div class="rs__notes-sidebar">
    <h4 class="rs__sidebar-title">
      <Icon icon="sort" fill="#444" :clickable="false">All Notes</Icon>
    </h4>
    <hr class="rs__notes-divider" />
    <ul class="rs__note-list">
      <li v-for="note in noteStore.allNotes" :key="note.id">
        {{ note.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

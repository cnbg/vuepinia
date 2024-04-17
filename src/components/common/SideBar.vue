<script setup>
import SideBarList from '@/components/common/SideBarList.vue'
import { useNoteStore } from '@/stores/NoteStore'

const noteStore = useNoteStore()
</script>

<template>
  <div class="rs__notes-sidebar">
    <SideBarList v-if="noteStore.pinnedNotes.length > 0" :notes="noteStore.pinnedNotes" title="Pinned Notes" icon="bookmarks" />
    <SideBarList :notes="noteStore.unpinnedNotes" title="All Notes" icon="sort" />
  </div>
</template>

<style scoped>

</style>

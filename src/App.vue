<script setup>
import ToolBar from '@/components/common/ToolBar.vue'
import SideBar from '@/components/common/SideBar.vue'
import AddNotePage from '@/pages/note/AddNotePage.vue'
</script>

<template>
  <div class="rs__notes-wrapper">
    <ToolBar />
    <div class="rs__content-wrapper">
      <SideBar />
      <div class="rs__notes-content">
        <AddNotePage />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import Menubar from 'primevue/menubar'
import ToolBar from '@/components/common/ToolBar.vue'
import SideBar from '@/components/common/SideBar.vue'
import AddNotePage from '@/pages/note/AddNotePage.vue'

const items = [
  {label: 'Home', icon: 'pi mr-2 pi-home', link: '/home'},
  {label: 'Home', icon: 'pi mr-2 pi-home', link: '/home'},
  {label: 'Home', icon: 'pi mr-2 pi-home', link: '/home'},
]
</script>

<template>
  <div class="rs__notes-wrapper">
    <Menubar :model="items" />
    <div class="text-3xl font-bold underline">
      tailwind works
    </div>
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

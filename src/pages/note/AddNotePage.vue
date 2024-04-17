<script setup>
import Icon from '@/components/common/Icon.vue'

import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import contenteditable from 'vue-contenteditable'
import { useNoteStore } from '@/stores/NoteStore'


const title = ref('')
const content = ref('')
const noteStore = useNoteStore()

const submitAddForm = (e) => {
  if (title.value.length === 0 || content.value.length === 0) {
    console.log('fill empty fields')
    return
  }

  noteStore.addNote({
    id: uuidv4(),
    title: title.value,
    content: content.value,
    pinned: false,
    date: new Date(),
  })

  title.value = ''
  content.value = ''
}
</script>

<template>
  <form @submit.prevent="submitAddForm" class="rs__note-form">
    <input
        v-model.trim="title"
        type="text" class="rs__input-title"
        placeholder="Note title..." />
    <contenteditable
        tag="div"
        class="rs__content-editable"
        :no-nl="false"
        :no-html="true"
        v-model.trim="content" />
    <button type="submit"
            class="rs__form-btn-save">
      <Icon icon="check" class="mr-5p" :clickable="false" />
      <span>save</span>
    </button>
  </form>
</template>

<style scoped>

</style>

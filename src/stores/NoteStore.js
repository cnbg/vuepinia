import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [
            {id: 1, title: 'Note title 1', content: 'Note content 1', pinned: false, date: new Date().toISOString()},
            {id: 2, title: 'Note title 2', content: 'Note content 2', pinned: false, date: new Date().toISOString()},
            {id: 3, title: 'Note title 3', content: 'Note content 3', pinned: false, date: new Date().toISOString()},
            {id: 4, title: 'Note title 4', content: 'Note content 4', pinned: true, date: new Date().toISOString()},
            {id: 5, title: 'Note title 5', content: 'Note content 5', pinned: false, date: new Date().toISOString()},
            {id: 6, title: 'Note title 6', content: 'Note content 6', pinned: true, date: new Date().toISOString()},
        ],
    }),
    getters: {
        allNotes: state => state.notes,
        pinnedNotes: state => state.notes.filter(note => note.pinned),
    },
})

import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [],
    }),
    getters: {
        allNotes: state => state.notes,
        pinnedNotes: state => state.notes.filter(note => note.pinned === true),
        unpinnedNotes: state => state.notes.filter(note => note.pinned === false),
    },
    actions: {
        addNote(note) {
            this.notes.push(note)
        },
        pinNote(id) {
            this.notes = this.notes.map(note => {
                if (note.id === id) note.pinned = true

                return note
            })
        },
        unpinNote(id) {
            this.notes = this.notes.map(note => {
                if (note.id === id) note.pinned = false

                return note
            })
        },
        togglePin(note) {
            note.pinned === true ? this.unpinNote(note.id) : this.pinNote(note.id)
        },
    },
})

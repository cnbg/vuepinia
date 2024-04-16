<script setup>
defineProps({
  icon: {type: String, required: true},
  fill: {type: String, default: '#fff'},
  width: {type: Number, default: 24},
  height: {type: Number, default: 24},
  viewbox: {type: String, default: '0 -960 960 960'},
  clickable: {type: Boolean, default: true},
})

const path = {
  'edit': 'M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z',
  'delete': 'M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z',
  'gridview': 'M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z',
  'listview': 'M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z',
  'search': 'M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z',
  'sort': 'M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z',
}
</script>

<template>
  <span class="icon" :class="clickable ? 'clickable' : ''">
    <svg xmlns="http://www.w3.org/2000/svg"
         v-if="path[icon]"
         :width="width" :height="height" :viewBox="viewbox">
      <path :fill="fill" :d="path[icon]" />
    </svg>
    <slot></slot>
  </span>
</template>

<style scoped>
.icon {
  display: flex;
  align-items: center;

  &.clickable {
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
  }
}
</style>

<template lang="pug">
div
    v-avatar( color="red")
        v-btn(  @click="selectedItem =!selectedItem")
            v-img( width="50" src="http://localhost:3000/assets/img/ali.jpeg")
    v-card( v-if="selectedItem"  @click="selectedItem =!selectedItem" class="mt-2" width="70" tile)
      v-navigation-drawer 
          v-list( nav
            dense)
            v-list-item-group(v-model="selectedItem"
              color="primary")
              v-list-item(v-for="(item, i) in items"
                :key="i")
                v-list-item-icon
                  v-icon( v-text="item.icon")
                v-list-item-content
                  v-list-item-title( v-text="item.text")
    
</template>
<script>

export default {
  name: 'AriaLogado',
  data() {
    return {
    selectedItem: 0,
      items: [
       { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
      
    }
  },
}
</script>

<template lang="pug">
    v-card(class="overflow-hidden" color="")
  
        v-toolbar( flat color="")
            v-icon mdi-wrench
            v-toolbar-title( class="font-weight-light")  Thema usuário
            v-spacer
        v-card-text
            form()
                v-row
                    v-col(cols="4")
                        v-row(v-for="item in itens" :key="item")
                            v-col(cols="7")
                                h5 {{item.title}}
                            
                            v-col(cols="5" )
                                v-btn(:color="colorBtn(item)" @click="changeColor(item)")
                                    v-icon mdi-palette  
                                    | Escolher cor 
                        
                    v-col(cols="8" v-if ="itemSelected && itemSelected.colum")
                        PickerColor(:title="itemSelected.title" :valor="itemSelected.valor" v-on:newColor="getNewColor")
                
            br  
            v-divider
            v-card-actions
    
                v-btn(
                color="success"
                @click="save") Save
                v-spacer
                v-btn(
                color="error"
                align='end'
                @click="clear") Cancelar
            
            v-snackbar(
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            left) Thema has been updated
        
</template>
<script>
const itensColor = [
                {title:'Cor Cabeçalho',valor:'#D62F0D' ,colum :'header_color'},
                {title:'Cor pagina',valor:'#E6DDDD' ,colum :'body_color'},
                {title:'Cor botões ',valor:'#A09B9B' ,colum :'button_color'},
                {title:'Cor Erro',valor:'#EB0B0B' ,colum :'error_color'},
                {title:'Cor Informação',valor:'#1B29EC' ,colum :'info_color'},
                {title:'Cor Sucesso',valor:'#06A017' ,colum :'success_color'},
                {title:'Cor Alerta',valor:'#DDC725' ,colum :'warning_color'},
        ]
export default {
      data: () => ({
            itens :[...itensColor],
            itemSelected:null,
            hasSaved: false,
      }),
      
      methods: {
        colorBtn(item) {
            return item.valor
        },
        changeColor(item) {
            this.itemSelected = {...item}
        },
        save () {
            this.hasSaved = true
        },
        clear () {
            this.itens = [...itensColor]
            this.itemSelected = null
        },
        getNewColor(event) {
            if (this.itemSelected && event) {
                 for (let index = 0; index < this.itens.length; index++) {
                     if (this.itens[index].colum === this.itemSelected.colum) {
                         return this.itens[index].valor = event
                     };
                     
                 }
            }
            this.itemSelected = null 
        }
      }
    
}
</script>
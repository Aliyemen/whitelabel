<template lang="pug">
 v-card(class="overflow-hidden" color="")
  
        v-toolbar(
        flat
        color="")
            v-icon mdi-palette
            v-toolbar-title( class="font-weight-light")  {{title}} 
        v-container
            v-row
                v-col(cols="12" md="4")
                    v-btn(v-for="t in types"
                    :key="t"
                    class="my-4"
                    block
                    @click="type = t") {{t}}
                v-col(class="d-flex justify-center")
                    v-color-picker( v-model="color")
                v-col(cols="12" md="4")
                    v-sheet(dark class="pa-4")
                        pre {{showColor }}
                       
                
                
</template>         
<script>
export default {
    props :{
        title:{ 
            type :String,
            required:true
        },
        valor :{
            type :String ,
            default:''
        }
    },
    mounted() {
        if(this.valor){
            this.color = this.valor
        }
    },
   data: () => ({
      types: ['hex', 'hexa', 'rgba', 'hsla', 'hsva'],
      type: 'hex',
      hex: '#FF00FF',
      hexa: '#FF00FFFF',
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
      
    }),

    computed: {
      color: {
        get () {
          return this[this.type]
        },
        set (v) {
          this[this.type] = v
        },
      },
      showColor () {
        if (typeof this.color === 'string'){
             this.$emit('newColor',this.color)
             return this.color
        }
      
        let newColor = JSON.stringify(Object.keys(this.color).reduce((color, key) => {
            color[key] = Number(this.color[key].toFixed(2))
            return color
        }, {}), null, 2)
       
       this.$emit('newColor',newColor)

       return newColor;
      },
    },
    
}
</script>
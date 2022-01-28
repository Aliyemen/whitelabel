<template lang="pug">
  v-card(class="overflow-hidden"
    color=""
    )
  
    v-toolbar(
      flat
      color="")
      v-icon mdi-account
      v-toolbar-title( class="font-weight-light")  Perfil usuário
      v-spacer
      v-btn( color=" "
        fab
        small
        @click="isEditing = !isEditing")
        v-icon( v-if="isEditing") mdi-close
        v-icon( v-else) mdi-pencil
    v-card-text
        form()
            v-row
                v-col(cols="6")
                    v-text-field(
                        color=""
                        v-model="form.name"
                        label="Nome"
                        :counter="50"
                        required
                        )
                v-col(cols="6")
                    v-text-field(
                        color=""
                        v-model="form.lastname"
                        label="Aplido"
                        :counter="50"
                        required
                        )
                v-col(cols="3")
                    v-text-field(
                        color=""
                        v-model="form.documento"
                        label="CPF/CNPJ"
                        :counter="14"
                        required
                        )
                v-col(cols="6")
                    v-text-field(v-model="form.email"
                        prepend-icon="mdi-email"
                        label="E-mail"
                        required
                        )
                v-col(cols="3")
                    v-text-field(v-model="form.telefone"
                        prepend-icon="mdi-phone"
                        label="Telefone"
                        )
                v-col(cols="5")
                    v-text-field(v-model="form.address"
                        label="endereço"
                        )
                v-col(cols="1")
                    v-text-field(v-model="form.numberAddress"
                        label="Número"
                        )
                v-col(cols="4")
                    v-text-field(v-model="form.city"
                        label="Cidade "
                        )
                v-col(cols="2")
                    v-autocomplete(
                        v-model="form.uf"
                        required
                        :items="states"
                        color=""
                        item-text="nome"
                        label="UF")
                v-col(cols="6")
                    v-text-field(v-model="form.facebook"
                        prepend-icon="mdi-facebook"
                        label="Facebook "
                        
                        )
                v-col(cols="6")
                    v-text-field(v-model="form.linkedin"
                        prepend-icon="mdi-linkedin"
                        label="Linkedin "
                        
                        )
                v-col(cols="6")
                    v-text-field(v-model="form.instagram"
                        prepend-icon="mdi-instagram"
                        label="Instagram "
                        
                        )
                v-col(cols="6")
                    v-text-field(v-model="form.youtube"
                        prepend-icon="mdi-youtube"
                        label="Youtube "
                        )
                v-col(cols="6")
                    v-file-input(v-model="form.logotipo"
                        chips small-chips truncate-length="15"
                        label="LogoTipo "
                        
                        )
                v-col(cols="6" align="end")
                    v-img( height="60"
                         width="300px"
                         :src="srcLogoTipo"
                        )
                   

                 
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
      left) Your profile has been updated
   
</template>
<script>
import ufs from "../../lib/uf";
const fomulario = {
     name: '',
     lastname: '',
     documento:'',
     email: '',
     telefone: '',
     address: '',
     numberAddress: '',
     city:'',
     uf: null,
     facebook:'',
     linkedin:'',
     instagram:'',
     youtube:'',
     logotipo: null

}

export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
        form :{...fomulario},
        states: [...ufs],
        select: null,
      }
    },
    computed: {
     srcLogoTipo(){
        return 'https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F23abeb7fc8a4c0de6ace6b16d4e67e1f.png?alt=media&token=5026f7de-4c5c-4d26-8da5-310b56c05a71';
     },
      
    },

    methods: {
      customFilter (item, queryText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        // this.$v.$touch()
        this.hasSaved = true
      },
      clear () {
        // this.$v.$reset()
        this.form ={...fomulario},
        this.checkbox = false
      },
    },
  
    
}
</script>
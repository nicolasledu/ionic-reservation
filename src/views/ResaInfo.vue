<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><img src="assets/img/harley.png" style="width:100px" alt=""></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"><img src="assets/img/harley.png" style="width:35px" alt=""></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item style="text-align: center; margin-top: 30%">
          <p>Le magasin est ouvert de {{info.ouverture}}H a {{info.fermeture}}H sauf le Dimanche !</p>
      </ion-item>
      <ion-item style="text-align: center; margin-top: 10%">
          <p>Voici l'adresse : {{info.adresse}} !
            Rejoins nous vite!
          </p>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent , IonItem } from '@ionic/vue';
import axios from 'axios'

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage , IonItem },

  data(){
    return{
      info: '',
      }
    },

  mounted(){
           axios.get('http://127.0.0.1:8000/api/infos')
           .then(response => {
            console.log(response)
            this.info = response.data.infos
            console.log(this.info)
          }).catch(error => {
            console.log(error.response)
          })
    },
}

</script>


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
      <div style="margin-top: 10%;margin-left: 5%; margin-right: 5%;">
        <ion-item style="border-radius: 15px;">
         <h1 style="text-align:center">Réserve ta virée en Harley !</h1>
        </ion-item>
        <img src="assets/img/soa.png" alt="soa">
      </div>
      <div class="reservation" style="text-align:center;margin-top: 20%; border-radius: 20px; margin-left: 5%; margin-right: 5%;" >
        <p>{{message.error}}</p>
        <p>{{message.success}}</p>
        <form  @submit.prevent="resa" method="post">
          <ion-item style="border-radius: 20px 20px 0px 0px;" >
            <ion-label>Email :</ion-label>
            <ion-input type="email" name="email" v-model="Global.email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Date :</ion-label>
           <ion-input type="date" name="date" v-model="Global.date"></ion-input>
          </ion-item>
          <ion-item style="border-radius: 0px 0px 20px 20px;">
            <ion-label>Heure :</ion-label>
            <ion-input type="time" name="time" v-model="Global.time" step="3600"></ion-input>
          </ion-item>
          <ion-button style="margin-top: 5%;" color="warning" type="submit">RÉSERVE</ion-button>
        </form>
      </div>    
    </ion-content>
  </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent , IonItem , IonLabel , IonInput , IonButton} from '@ionic/vue';


export default  {
  name: 'Tab1',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent , IonItem , IonLabel , IonInput , IonButton },

  data(){
    return{      
      Global:{
        email: '',
        date: '',
        time: '',
      },
      message: '',
      
      }
    },

  methods: {
    resa(){
      this.message= ""
      let param = {
            method : 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body : JSON.stringify(this.Global)
          }

      fetch("http://127.0.0.1:8000/api/reservation", param)
      .then(response => response.json())
      .then(data => {
        this.message = data
        console.log(data)
      })
      .catch(error => {console.log(error)})
    }
  }
}
</script>
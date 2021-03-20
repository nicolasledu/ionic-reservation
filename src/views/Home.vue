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
          <ion-title size="large"><img src="assets/img/harley.png" style="width:35px;" alt=""></ion-title>
        </ion-toolbar>
      </ion-header>
        <h1 style="text-align:center; margin-top:10%; margin-bottom:10%">Harley - Davidson</h1>

        <div style="dipslay: flex; text-align:center">
          <img src="assets/img/moto2.jpg" style="margin-bottom:10%; border-radius: 15px; margin-right:5%; margin-left:5%; width: 90%" alt="moto" >
        </div>

        <ion-label><h2 style="text-align:center">LOUER UNE HARLEY-DAVIDSON®<br>
      Harley-Davidson® Authorized Rentals vous permet de prendre facilement la route au guidon d'un des derniers modèles
      Harley-Davidson®, dans votre région, un autre pays ou un autre continent. Quelques clics suffisent pour réserver 
      votre moto en ligne.</h2></ion-label>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel} from '@ionic/vue';

export default  {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel }
}
</script>
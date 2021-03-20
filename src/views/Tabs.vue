<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/Home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Reservation" href="/tabs/Reservation">
          <ion-icon :icon="calendarOutline" />
          <ion-label>Reservation</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Info" href="/tabs/Resainfo">
          <ion-icon :icon="personOutline" />
          <ion-label>Info</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { calendarOutline, personOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      calendarOutline, 
      personOutline, 
      homeOutline,
    }
  }
}
</script>
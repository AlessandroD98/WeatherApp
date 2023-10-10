# WeatherApp - Applicazione Meteo con React Native ☀️🌦️🌧️

**WeatherApp** è un'applicazione React Native che ti permette di visualizzare informazioni meteo dettagliate per la tua posizione attuale, previsioni future per i prossimi 3 giorni e altri dati meteo importanti.

## Funzionalità Principali

- **Current Weather**: Mostra i dati meteo attuali basati sulla tua posizione GPS, inclusa la temperatura. 🌡️
- **Upcoming Weather**: Visualizza le previsioni del tempo per i prossimi 3 giorni. 📅
- **Altre Informazioni**: Accedi a informazioni aggiuntive come umidità, pressione, popolazione, tramonto e alba. 🌬️🌎🌇🌆

## Requisiti

Prima di iniziare, assicurati di aver installato Node.js e npm sul tuo sistema. Assicurati anche di avere un account OpenWeather API per ottenere una chiave API.

## Installazione

1. **Clona il repository**:

   ```bash
   git clone https://github.com/tuonome/WeatherApp.git
   cd WeatherApp
   
Installa le dipendenze:

bash
Copy code
npm install
Crea un file .env nella radice del progetto e inserisci la tua chiave API OpenWeather:

env
Copy code
OPEN_WEATHER_API_KEY=TUA_CHIAVE_API

Librerie Utilizzate
-React Navigation per la navigazione tra le schermate.
-Expo Location per ottenere le coordinate GPS.
-Moment.js per la gestione delle date e degli orari.
Expo Linear Gradient per sfondi gradient.

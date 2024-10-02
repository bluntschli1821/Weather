import 'dotenv/config'

export default {
  "expo": {
    "name": "Weather",
    "slug": "Weather",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/Logo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/Logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/Logo.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/Logo.png",
    },
    extra: {
      apikey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      // measurementId: process.env.MEASUREMENT_ID
    }
  }
}

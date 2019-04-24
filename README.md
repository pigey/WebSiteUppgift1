# How-To Guide

# Viktig Information innan du börjar

Det kommer vara två delar med denna app då den första delen är för designen av appen och den andra delen är för Spotify's API då den inte fungerar i appen än.

# Designen av appen

## Enbart skaffa appen till mobil
För att enbart skaffa appen så finns det en **.APK** fil i '\Android APK' som endast behövs för att installera appen på din Android mobil.

## Testa koden själv i **Android Studio**
För att få tag på design koden och testa det i Android Studio så finns det en **www** folder i `\Design app` som behövs läggas in i tex: `C:\Users\användarnamn\APPnamn\platforms\android\app\src\main\assets`

# Spotify API

1. Extrahera filerna från **.RAR filen** in i tex: `C:\Users\användarnamn\APPnamn\platforms`

2. Starta **Android Studio** programet

3. Öpnna en **Terminal** och skriv in den följande koden: `node auth-server/authorization_code/app.js`

4. Öppna en till **Terminal** och gå in i **client foldern** genom att skriva in det följande: `cd client`

5. För att sedan **starta** React servern så skriver du in: `npm start`

**Viktig Information till Spotify API**

Spotifys API krachar ifall du inte har spotify igång och lyssnar på en låt

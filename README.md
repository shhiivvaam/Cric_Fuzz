<h1 align="center">🏀🏐🏑 CRIC-FUZZ 🏏⚽🏈</h1>

<div align="center"> <img src="https://github.com/suryapratap6521/Farmers_Friend/blob/main/src/assets/logo1.png?raw=true"></div>

### OBJECTIVE :

<p> A dynamic and user-friendly sports score tracking platform that delivers real-time updates, detailed statistics, and engaging content to sports fans. </p>

### FEATURES LIST :

1. **Multi-Sport Coverage**
   - _Live Scores_: Real-time scores and match updates for various sports leagues and tournaments.
   - _Match Details_: Comprehensive details such as team line-ups, match schedules, and venue information.
2. **Player and Team Statistics**
   - _Player Profiles_: Showcasing player profiles with career statistics, performance metrics, and historical data.
   - _Team Stats_: Present team statistics including win-loss records, rankings, and historical performance summaries.
3. **News and Updates**
   - _Latest News_: Aggregate and display sports news articles, editorials, and updates from reliable sources.
   - _Notification System_: Sending push notifications for important match events, news alerts, and personalized updates.
4. **User Engagement**
   - _Interactive Features_: Includes features like live commentary, polls, and user-generated content (e.g., fan discussions, predictions).
   - _Social Sharing_: Enable users to share match highlights, scores, and articles on social media platforms.
5. **Customization and Personalization**
   - _Favorite Teams_: Allows users to follow and receive updates about their favorite teams and players.
   - _Custom Alerts_: Provides options for setting personalized alerts for specific match outcomes, player milestones, or league updates.


   ![1713333986299](image/README/1713333986299.png)

# Run Scripts

```Terminal
git clone https://github.com/shhiivvaam/Farmers_Friend.git

cd Farmers_Friend
npm install
npm run dev

cd server
npm install
npm start
```

# Environment Variables

  Create an { .env } file in server directory and add these env variables to run the Code base successfully.

---

```Terminal
// BACKEND

PORT=5000
MONGODB_URL = ENTER YOU MONGODB DATABASE CONNECTION STRING

JWT_SECRET= "ENTER YOUR JWT SECRET HERE"

MAIL_HOST = smtp.gmail.com
MAIL_USER= ENTER YOUR EMAIL ADDRESS (FOR MAILING SERVICES)
MAIL_PASS=ewvjaiadwhtpymib

API_KEY = ENTER YOUR GOOGLE STUDIO API KEY


// FRONTEND

REACT_APP_BASE_URL = <YOUR_SERVER_RUNNING_PORT_ADDRESS>/api/v1
```

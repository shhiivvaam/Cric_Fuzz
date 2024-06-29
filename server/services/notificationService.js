const webpush = require('web-push');
require('dotenv').config();

webpush.setVapidDetails(
    'mailto:example@example.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

const sendNotification = (subscription, payload) => {
    webpush.sendNotification(subscription, payload)
        .then(response => console.log('Notification sent:', response))
        .catch(error => console.error('Error sending notification:', error));
};

module.exports = { sendNotification };

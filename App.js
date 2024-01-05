import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ToastComponent} from './src/Components/ToastComponent';

export default function App() {
  

  const [toastNotification, setToastNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({});

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        setNotificationData({
          title: remoteMessage?.notification?.title,
          body: remoteMessage?.notification.body,
        });
        setToastNotification(true);
      }
      setTimeout(() => {
        setToastNotification(false);
      }, 3000);
    });

    return unsubscribe;
  }, [notificationData]);

  return (
   
        <SafeAreaProvider>
          <StatusBar backgroundColor={Colors.black} barStyle={'default'} />
          {toastNotification && <ToastComponent {...notificationData} />}
        </SafeAreaProvider>
     
  );
}

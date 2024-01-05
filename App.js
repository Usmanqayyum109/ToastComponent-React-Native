import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import MainNavigation from './src/Navigation/MainNavigation';
import messaging from '@react-native-firebase/messaging';
import {persistedStore, store} from './src/Redux/Store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Colors} from './src/Constant/Colors';
import {LogBox} from 'react-native';
import {ToastComponent} from './src/Components/ToastComponent';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs('Excessive number of pending callbacks: 501.');
  }, []);

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <SafeAreaProvider>
          <StatusBar backgroundColor={Colors.black} barStyle={'default'} />
          <MainNavigation />
          {toastNotification && <ToastComponent {...notificationData} />}
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

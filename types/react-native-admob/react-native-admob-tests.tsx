import React from 'react'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

const App = () => {

  // Display an interstitial
  AdMobInterstitial.setAdUnitID('your-admob-unit-id');
  AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

  // Display a rewarded ad
  AdMobRewarded.setAdUnitID('your-admob-unit-id');
  AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
  return (
  // Display a banner
  <AdMobBanner
    // adSize="fullBanner"
    // adUnitID="your-admob-unit-id"
    testDevices={[AdMobBanner.simulatorId]}
    onAdFailedToLoad={error => console.error(error)}
  />

  // Display a DFP Publisher banner
  <PublisherBanner
    adSize="fullBanner"
    adUnitID="your-admob-unit-id"
    testDevices={[PublisherBanner.simulatorId]}
    onAdFailedToLoad={error => console.error(error)}
    onAppEvent={event => console.log(event.name, event.info)}
  />

  )
}
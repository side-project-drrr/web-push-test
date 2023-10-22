import { pushService } from "../service/webpushService";
import { VAPID_PUBLIC_KEY } from "./constants";

const pushButton = document.querySelector(".js-push-btn");

let isSubscribed = false;
let swRegistration = null;

export function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function servicePushManager() {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    console.log("Service Worker and Push is supported");

    navigator.serviceWorker
      .register("src/sw.js")
      .then(function (swReg) {
        console.log("Service Worker is registered", swReg);
        swRegistration = swReg;
      })
      .catch(function (error) {
        console.error("Service Worker Error", error);
      });
  } else {
    console.warn("Push messaging is not supported");
    pushButton.textContent = "Push Not Supported";
  }
}

export function initializeUI() {
  // Set the initial subscription value

  if (isSubscribed) {
    // TODO: Unsubscribe user
    //unsubscribeUser();
    console.log("구독 취소");
  } else {
    subscribeUser();
    pushService();
  }

  // Set the initial subscription value
  swRegistration.pushManager.getSubscription().then(function (subscription) {
    isSubscribed = !(subscription === null);

    updateSubscriptionOnServer(subscription);

    if (isSubscribed) {
      console.log("User IS subscribed.");
    } else {
      console.log("User is NOT subscribed.");
    }

    updateBtn();
  });
}

export const unsubscribeUser = () => {
  console.log(123);
  swRegistration.pushManager
    .getSubscription()
    .then(function (subscription) {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function (error) {
      console.log("Error unsubscribing", error);
    })
    .then(function () {
      updateSubscriptionOnServer(null);

      console.log("User is unsubscribed.");
      isSubscribed = false;

      updateBtn();
    });
};

function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(VAPID_PUBLIC_KEY);
  console.log(applicationServerKey);
  swRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    })
    .then(function (subscription) {
      console.log("User is subscribed.");

      updateSubscriptionOnServer(subscription);

      isSubscribed = true;

      updateBtn();
    })
    .catch(function (error) {
      console.error("Failed to subscribe the user: ", error);
      updateBtn();
    });
}

function updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector(".js-subscription-json");
  const subscriptionDetails = document.querySelector(
    ".js-subscription-details"
  );

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove("is-invisible");
  } else {
    subscriptionDetails.classList.add("is-invisible");
  }
}

function updateBtn() {
  if (Notification.permission === "denied") {
    console.log("Push Messaging Blocked");
    updateSubscriptionOnServer(null);
    return;
  }
  if (isSubscribed) {
    console.log("Disable Push Messaging");
  } else {
    console.log("Enable Push Messaging");
  }
}

navigator.serviceWorker.register("src/sw.js").then(function (swReg) {
  console.log("Service Worker is registered", swReg);

  swRegistration = swReg;
  initializeUI();
});

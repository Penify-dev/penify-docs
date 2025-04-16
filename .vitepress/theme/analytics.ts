import { Dict } from "mixpanel-browser";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: any;
  }
}

// Helper to check if code is running in browser environment
const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && window.document !== undefined;
};

export function inHouseAnalytics(event: string, eventRef: Dict) {
  if (!isBrowser()) return;
  // if localhost, return
  if (window.location.hostname === "localhost") return;
  
  const cId = localStorage.getItem("cId");
  let email = localStorage.getItem("aId");
  // capture all query params in eventRef
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.forEach((value, key) => {
    if (key !== "oid" && key !== "ot" && key !== "eid") {
      eventRef[key] = value;
    }
  });
  
  if(!email) {
    // Generate a unique anonymous ID if email doesn't exist
    let anonymousId = localStorage.getItem("aId");
    if (!anonymousId) {
      // Create unique ID combining timestamp and random string
      anonymousId = `an_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem("aId", anonymousId);
    }
    email = anonymousId; // Use this as the identifier instead of email
  }
  
  const campaignId = getQueryParameter("oid") || "-1";
  const campaignType = getQueryParameter("ot") || "-1";
  const cIdInt = parseInt(cId || "-1");
  const eId = parseInt(getQueryParameter("eid") || "-1");
  const data = {
    eventType: event,
    cId: cIdInt,
    email,
    eventRef: JSON.stringify(eventRef),
    campaignId,
    campaignType,
    meta: JSON.stringify({
      url: isBrowser() ? window.location.href : '',
      referrer: isBrowser() ? document.referrer : '',
      eId: eId,
    }),
  };

  try {
    // axiosInstance.post("v1/analytics/track", data);
    fetch("https://production-gateway.snorkell.ai/api/v1/analytics/track", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      // Handle response if needed
    })
    .catch(error => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}

export const pageView = (url: string) => {
  inHouseAnalytics("pageView", {url});
};

export const getQueryParameter = (name: string) => {
  if (!isBrowser()){console.log("server side rendering"); return null};
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

export const trackLinkClick = (url: string, email: string = "", cId: string = "") => {
  inHouseAnalytics("linkClick",{ url });
};

export const trackScroll = (value: number) => {
  inHouseAnalytics("scroll", {event:"scrolled 50% on homepage"});
};

export const trackFormSubmission = (value: [string]) => {
  inHouseAnalytics("formSubmission", {event:"contact us form submission"});
};

export const trackVideoStart = (value: boolean) => {
  inHouseAnalytics("videoView", {event:"Penify.dev video tuts"});
};
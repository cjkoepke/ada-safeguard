import { getScamList } from "../data/firebase";

// Retrieve fresh copy of scam sites.
chrome.runtime.onInstalled.addListener(async () => await getScamList(true));

// Maybe retrieve a fresh copy on every new tab.
chrome.tabs.onCreated.addListener(async () => await getScamList());
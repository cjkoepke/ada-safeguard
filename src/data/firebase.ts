import firebase from 'firebase';
import { ScamListCache } from '../@types';

const CACHE_TIMEOUT = 86400;

/**
 * Initalizes the Firebase database.
 */
const config = {
    apiKey: "AIzaSyApysmg1ZhqWNNQhC6bz3FD0tMHjs2KRLc",
    authDomain: "ada-scam-alert.firebaseapp.com",
    projectId: "ada-scam-alert",
    storageBucket: "ada-scam-alert.appspot.com",
    databaseURL: "https://ada-scam-alert-default-rtdb.firebaseio.com/",
    messagingSenderId: "418847552969",
    appId: "1:418847552969:web:7cfe7635b0e33cd3b7e418",
    measurementId: "G-MF8R07ZKCL"
};
firebase.initializeApp(config);

/**
 * Retrieves a fresh copy and writes the result to local storage.
 *
 * @return {Promise} A promise resolving to a cached list of scam sites.
 */
export const updateScamList = async (): Promise<ScamListCache> => {
    const list = await firebase.database().ref('/scamList/domains').get();
    chrome.storage.local.set({scamList: {
        timestamp: Date.now(),
        list: list.val()
    }});

    return list.val();
}

/**
 * Main function to get a list of scam sites as an array of domain names.
 *
 * @param {boolean}  force If set to true, will fetch a fresh copy.
 * @return {Promise}       A promise resolving to the full list of scam sites.
 */
export const getScamList = async (force: boolean = false): Promise<string[]> => {
    let value = null;
    chrome.storage.local.get(['scamList'], ({ scamList }) => {
        value = scamList
    });
    
    // Fetch new copy if not set or data is older than a day.
    if (!value?.list || (Date.now() - value.timestamp) > CACHE_TIMEOUT || force) {
        value = await updateScamList();
    }
    
    return value.list;
}

export default firebase;
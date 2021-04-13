import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const config ={
    apiKey: "AIzaSyAB1bdW7dSV1diVSOTrLaVFuliyO4hNpaM",
    authDomain: "crwn-db-ac8c4.firebaseapp.com",
    projectId: "crwn-db-ac8c4",
    storageBucket: "crwn-db-ac8c4.appspot.com",
    messagingSenderId: "614915554013",
    appId: "1:614915554013:web:b8c5eb77a57fb2e4af3934"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    const collectionSnapShot = await collectionRef.get();

    console.log({collectionSnapShot});

        if(!snapShot.exists) {
            const { displayName, email } = userAuth
            const createdAt = new Date()
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message)
            }
        }

        return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
        }, {} );
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider) // Import this into auth component

export default firebase;

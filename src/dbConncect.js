import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
// TODO: need to import service account from secret file


export default function dbConnect() {
    // check if NOT connected 
    if(!getApps().length) {
        // Connect
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    // return db-connection
    return getFirestore()
}
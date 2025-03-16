# Week 5 Assignment - React Project with Firebase

## Project Setup Instructions

Follow these steps to set up and run the project on your local machine.

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A Firebase account ([Sign up here](https://firebase.google.com/))

### Disclaimer:
- Make sure to configure all scripts as required by the terminal should an error occur in npm run dev
- In some cases: need some manual configuration to the firebase/npm

---

## 1. Clone the Repository
```sh
git clone <your-repository-url>
cd <your-project-folder>
```

## 2. Install Dependencies
```sh
npm install
```

## 3. Setup Firebase
### a. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** and follow the instructions
3. Once created, navigate to **Project Settings**

### b. Add a Web App
1. Click on **"Add app"** and select **"Web"**
2. Register the app and follow the setup instructions
3. Copy the Firebase configuration details (apiKey, authDomain, etc.)

### c. Enable Firestore Database
1. In the Firebase Console, go to **Firestore Database**
2. Click **Create Database** and choose **Start in test mode**
3. Click **Next** and select your region

### d. Create a `.env` File
Inside your project's root directory, create a `.env` file and add your Firebase configuration:

```sh
REACT_APP_API_KEY=<your-api-key>
REACT_APP_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_PROJECT_ID=<your-project-id>
REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_APP_ID=<your-app-id>
```

**Important:** Do **not** share this `.env` file or commit it to version control.

---

## 4. Configure Firebase in Your Code
Create a `firebase.js` file in the `src` folder and add the following:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

---

## 5. Run the Project
```sh
npm start
```
This will start the development server, and the project should open in your browser at `http://localhost:3000/`.

---

## 6. Deployment (Optional)
To deploy the project using Firebase Hosting:
```sh
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```
Follow the prompts and select **Hosting** to deploy your project.

---

## Troubleshooting
- Ensure your `.env` file is correctly set up
- If the app doesn't start, try deleting `node_modules` and `package-lock.json` and running `npm install` again
- Check the Firebase console for any setup issues

For further assistance, refer to the [Firebase Docs](https://firebase.google.com/docs/).

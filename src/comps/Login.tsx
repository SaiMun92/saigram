import React from 'react';
import firebase from "firebase";
import * as firebaseui from "firebaseui";


// https://github.com/firebase/firebaseui-web
// https://www.youtube.com/watch?v=zq0TuNqV0Ew
// https://github.com/firebase/firebaseui-web/issues/216

const Login = () => {
    const uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
            window.location.assign('<your-privacy-policy-url>');
        }
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);

    return (
        <div id="firebaseui-auth-container" />
    )
};

export default Login;
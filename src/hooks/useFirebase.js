import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAthentication from "../Firebase/firebase.init";

initializeAthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // })
    }

    const handleEmailchange = e => {
        setEmail(e.target.value);

    }
    const handlePasswordchange = e => {
        setPassword(e.target.value);

    }
    const processLogin = () => {

        return signInWithEmailAndPassword(auth, email, password);

    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [])



    return {
        user,
        handleGoogleSignIn,
        handleEmailchange,
        handlePasswordchange,
        processLogin,
        handleResetPassword,
        logOut,
        isLoading
    }
}

export default useFirebase;
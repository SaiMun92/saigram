import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

type useStorageReturn = {
    progress: number | null,
    url: String | null,
    error: Error | null,
}

const useStorage = (file: File): useStorageReturn => {
    const [progress, setProgress] = useState<number | null>(0);
    const [error, setError] = useState<Error | null>(null);
    const [url, setUrl] = useState<String | null>(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);   // creates a reference to the image file
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt});
            setUrl(url);
        });
    }, [file]);

    return {progress, url, error};
}

export default useStorage;
import { projectFirestore, projectStorage } from "../firebase/config";

export const deleter = (collection: string, id: string, url: string) => {

    const collectionRef = projectFirestore.collection(collection);
    const storageRef = projectStorage.refFromURL(url);

    console.log('deleting')
    collectionRef
        .doc(id)
        .delete()
        .then(() => {
            console.log('successfully removed!')
        })
        .catch(() => {
            console.log('error!')
        });
    storageRef
    .delete()
    .then(() => {
        console.log("file storage deleted successfully");
    })
    .catch(() => {
        console.log('error in deleting file storage!');
    });
};
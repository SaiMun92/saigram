import { projectFirestore } from "../firebase/config";

export const deleter = (collection: string, id: string) => {

    const collectionRef = projectFirestore.collection(collection);
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
};
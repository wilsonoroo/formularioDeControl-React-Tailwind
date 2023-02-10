import { child, get, ref } from "firebase/database";
import useSWR from "swr";
import { db } from "./config";
const fetcher = (url) => fetch(url).then((res) => res.json());

export function getDocumentoById(empresa, id) {
    return new Promise((resolve, reject) => {


        // db.child("empresas").child(empresa + '/documentos/' + id).get().then((snapshot) => {
        //     if (snapshot.exists()) {
        //         console.log(snapshot.val());
        //         resolve(snapshot.val())
        //     } else {
        //         console.log("No data available");
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });
        const database = ref(db)
        console.log('empresas/' + empresa + '/documentos/' + id)

        get(child(database, 'empresas/' + empresa + '/documentos/' + id)).then((snapshot) => {
            console.log(snapshot.exists())
            if (snapshot.exists()) {
                console.log(snapshot);
            } else {
                console.log("No data available");
            }
            resolve(snapshot.val())
        }).catch((error) => {
            console.error(error);
            reject(error)
        });
    })

}

export function useGetToken(url) {

    const { data, error, isLoading } = useSWR(
        url,
        fetcher
    );


    return {
        user: data,
        isLoading,
        isError: error
    }
}
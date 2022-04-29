
import { db } from '../firbase';

export default function useFirestore() {
    const getCollection = async (path,setIsLoading) => {
    setIsLoading(true);
      return  db.collection(path).get().then(snapshot=>{
        let result=[];
        snapshot.docs.forEach(doc=>{
           result.push({id:doc.id,...doc.data()})
       })
       return result;
    })
  }
         const addDoc=async (path,data)=>{
          return db.collection(path).add(data);
        }
        const editDoc=async (path,data)=>{
            const  {id,...param}=data;
            return db.collection(path).doc(data.id).update(param);
        }
        const deleteDoc=async (path,id)=>{
          return db.collection(path).doc(id).delete();
        }
        return { getCollection, addDoc, editDoc,deleteDoc }
}

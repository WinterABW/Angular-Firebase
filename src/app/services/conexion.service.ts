import { Injectable, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { doc} from 'firebase/firestore';

export interface Item {
  name: string;
  id: '';
}

@Injectable({
  providedIn: 'root',
})
export class ConexionService implements OnInit {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(aCollection, { idField: 'id' });
  }

  listaItem() {
    return this.items$;
  }

  addItem(item: Item) {
    const temp = collection(this.firestore, 'items');
    return addDoc(temp, item);
  }

  delete(id:string) {
    const tempDelete = doc(this.firestore, `items/${id}`);
    return deleteDoc(tempDelete);
  }

  editar(item:Item) {
    const updateData={name:item.name }
    const tempEdit = doc(this.firestore,'items', item.id);
    return updateDoc(tempEdit, updateData)
  }

  ngOnInit(): void {}
}

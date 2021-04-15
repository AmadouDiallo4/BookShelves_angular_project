import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCNV6CdG8oOeaMQNgQEKZrUbd7QhAXUZoA",
      authDomain: "bookshelves-eec51.firebaseapp.com",
      projectId: "bookshelves-eec51",
      storageBucket: "bookshelves-eec51.appspot.com",
      messagingSenderId: "931706964657",
      appId: "1:931706964657:web:8dc769be9e7a8e40e9f090"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

import * as firebase from 'firebase';
import { setTimeout } from 'timers';

  // Initialize Firebase
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  
  const database = firebase.database();

  export { firebase, database as default };


  // // child_removed - listen the child change
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val());
  // })

  // // child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val());
  // })

  // // child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses); 
// })


// database.ref().on('value', (snapshot) => {
//     database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });
// })


//     database.ref('expenses').push({
//       description: 'Power Bill',
//       note: '',
//       amount: 200,
//       createdAt: 10000,
//   })


//   database.ref('notes/-L3m1rICN3Rc5DsXnuxz').update({
//       body: 'Firebase DB!'
//   });

//   database.ref('notes/-L3m1rICN3Rc5DsXnuxz').remove();

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React-Native, angular'
//   })





//   database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//       console.log(`${val.name}`);
//   })

/*
** subscription 2nd way
*/ 
//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   })

/*
** subscription 1st way
*/ 
//   database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   })


//   database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })



/*
** using promise, data setting
*/ 
//   database.ref().set({
//       name: 'Jayden',
//       age: 32,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Auckland',
//           country: 'New Zealand'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed.', e)
//   })

/* overrided */
// database.ref().set('This is my data.');

// update the age date
// database.ref('age').set(27);

// update nested properties data
// database.ref('location/city').set('Wellington')


/*
** add to the attribute obect
*/ 
// database.ref('attributes').set({
//     height: 180,
//     weight: 76
// }).then(() => {
//     console.log('data changed');    
// }).catch((e) => {
//     console.log('It is faild.', e);
// })

/*
** remove data
*/ 
// database.ref('location/country').remove().then(() => {
//     console.log('REMOVED');
// }).catch((e) => {
//     console.log('it is failed', e);
// });


/*
** update data
*/
// only can update to the root, don't location:{city: xxx}
// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software Developer',
//     isSingle: null,
//     'location/city': 'Boston' // this syntax can update to the object data
// });

// database.ref().update({
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
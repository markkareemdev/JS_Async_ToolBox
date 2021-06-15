// const p = Promise.resolve(1);
// p.then((result) => console.log(result));

// const p = Promise.reject(new Error("reason for rejection..."));
// p.catch((err) => console.log(err.message));

// const p1 = new Promise((reject) => {
//   setTimeout(() => {
//     console.log("Async operation 1");
//     reject(new Error("A promise is rejected"));
//   }, 2000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Async operation 2");
//     resolve(2);
//   }, 2000);
// });

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("err", err.message));

// Promise.race([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("err", err.message));

/////////////////////////////////////////////////////////////////////
// Excercise
// covert function to a promise and dissolve the callback hell with await and async

// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

//   function getCustomer(id, callback) {
//     setTimeout(() => {
//       callback({
//         id: 1,
//         name: 'Mosh Hamedani',
//         isGold: true,
//         email: 'email'
//       });
//     }, 4000);
//   }

//   function getTopMovies(movie,callback) {
//     setTimeout(() => {
//       callback(['movie1', 'movie2']);
//     }, 4000);

//   }

//   function sendEmail(email, movies, callback) {
//     setTimeout(() => {
//       callback();
//     }, 4000);
//   }

///////////////////////////////////////////////////////////////////////////////////////////////////

function getCustomer(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);

  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log("Top movies: ", movies);
    const Email = await sendEmail(customer.email, movies);
    console.log("Email sent...");
    return movies;
  }
}

notifyCustomer();




console.log("Before");

// to do: call the major function here

console.log("After");

////////////////////////////////////////////////

// async function

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading a user from a database...");
//     callback({ id: id, gitHubUsername: "mark" });
//   }, 2000);
// }

// function getRepos(username, callback) {
//   setTimeout(() => {
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

// function getCommits(repoId, callback) {
//   setTimeout(() => {
//     callback({ message: "final commits" });
//   }, 2000);
// }

// callback function implementation

// getUser(1, (user) => {
//   console.log(user);
//   getRepos(user.gitHubUsername, (repo) => {
//     console.log(repo);
//     getCommits(repo[0], (displayCommits) => {
//       console.log(displayCommits);
//     });
//   });
// });

//////////////////////////////////////////////////

// named function to solve the callback hell

// getUser(1, getRepos);

// function getRepos(user) {
//   console.log("user", user);
//   getRepos(user.gitHubUsername, getCommits);
// }

// function getCommits(repo) {
//   console.log(repo);
//   getCommits(repo[0], displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }

/////////////////////////////////////////////////

//promise

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(1);
//     reject(new Error("message"));
//   }, 2000);
// });

// p.then((result) => console.log("result", result)).catch((err) =>
//   console.log("error :", err.message)
// );

///////////////////////////////////////////////

// promise solution

//convert the function to a promise

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mark" });
    }, 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connected to a repo..");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repoId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the commit message ...");
      //   resolve({ message: "final commits" });

      reject(new Error("Some promise is rejected"));
    }, 2000);
  });
}

// getUser(1)

//   .then((user) => getRepos(user.gitHubUsername))
//   .then((repo) => getCommits(repo[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch(err => console.log('Error', err.message))

/////////////////////////////////////////////////////////

// use with  the restructed promise function
// await and async are actually built on the promise...

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log("err", error.message);
  }
}

displayCommits();

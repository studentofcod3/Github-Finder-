// init gitHub
const gitHub = new GitHub();

// init UI class
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    gitHub.getUser(userText).then(data => {
      // console.log(data); // This log is to test that we are actually getting the user - We also test it to find the message which is given when a user is not found so that we can display the error alert in the UI
      if (data.profile.message === "Not Found") {
        // Show alert if something goes wrong
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile in UI once it's been fetched
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clears the profile if search bar is empty
    ui.clearProfile();
  }
});

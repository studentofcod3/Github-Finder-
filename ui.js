// To look at all the data used in this project use the link https://api.github.com/users/some user to look at how it works

// The UI class is for rendering everything in the UI (of course)
class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Show user profile in UI once it's been fetched
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class= "row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repose: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item" >Company: ${user.company}</li>
              <li class="list-group-item" >Website/Blog: ${user.blog}</li>
              <li class="list-group-item" >Location: ${user.location}</li>
              <li class="list-group-item" >Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repose</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class = "row">
            <div class = "col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class = "col-md-6">
              <span class="badge badge-primary">Stars: ${
                repo.stargazers_count
              }</span>
              <span class="badge badge-secondary">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-success">Forks: ${
                repo.forks_count
              }</span>
            </div>      
          </div>
        </div>
      `;
    });

    // Output repos after we have run them through the forEach loop
    document.getElementById("repos").innerHTML = output;
  }

  // Show alert
  showAlert(message, className) {
    // Clear previous alert if there is one
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add className (which is just the className being passed in-refer to app.js and you will see that these are alert and alert-danger)
    div.className = className;
    // Add text - which is being  passed in too
    div.appendChild(document.createTextNode(message));
    // Get search container - This is the parent element of where the alert will go
    const container = document.querySelector(".searchContainer");
    // Get search box - We will be putting the alert before this
    const search = document.querySelector(".search");
    // Insert alert - the container is the parent, we use insertBefore and pass in the variable being inserted and then the variable it will go before
    container.insertBefore(div, search);

    // Clear alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile if search bar is empty
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

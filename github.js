// To look at all the data used in this project use the link https://api.github.com/users/some user to look at how it works

// The github class fetches the data from github for us
class GitHub {
  constructor() {
    this.client_id = "3438546fef8141ae63e1";
    this.client_secret = "3d1f1b94914234c28d3f7247381e3eb14e4fbf13";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    // Fetching the profile from github
    const profileResponse = await fetch(
      `http://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    // Fetching the repos from github
    const reposResponse = await fetch(
      `http://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile, //this is the same as returning profile: profile
      repos
    };
  }
}

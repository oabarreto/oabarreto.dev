export async function getGithubProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}

export async function getGithubProjects(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  return res.json();
}
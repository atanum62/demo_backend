require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
// const port = 4000
const githubdata={
  "login": "atanum62",
  "id": 191453444,
  "node_id": "U_kgDOC2lZBA",
  "avatar_url": "https://avatars.githubusercontent.com/u/191453444?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/atanum62",
  "html_url": "https://github.com/atanum62",
  "followers_url": "https://api.github.com/users/atanum62/followers",
  "following_url": "https://api.github.com/users/atanum62/following{/other_user}",
  "gists_url": "https://api.github.com/users/atanum62/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/atanum62/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/atanum62/subscriptions",
  "organizations_url": "https://api.github.com/users/atanum62/orgs",
  "repos_url": "https://api.github.com/users/atanum62/repos",
  "events_url": "https://api.github.com/users/atanum62/events{/privacy}",
  "received_events_url": "https://api.github.com/users/atanum62/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-12-12T08:48:34Z",
  "updated_at": "2025-03-11T12:29:15Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/web", (req, res) => {
    res.send("<h1>Welcome to website</h1>")
})
app.get("/github", (req, res) => {
    res.json(githubdata);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:3000`)
}) 
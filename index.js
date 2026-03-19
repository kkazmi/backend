const express = require('express')  
require('dotenv').config() 
const app = express()
const port = 3000
const databae =
    {
  "login": "kkazmi",
  "id": 24713558,
  "node_id": "MDQ6VXNlcjI0NzEzNTU4",
  "avatar_url": "https://avatars.githubusercontent.com/u/24713558?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kkazmi",
  "html_url": "https://github.com/kkazmi",
  "followers_url": "https://api.github.com/users/kkazmi/followers",
  "following_url": "https://api.github.com/users/kkazmi/following{/other_user}",
  "gists_url": "https://api.github.com/users/kkazmi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kkazmi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kkazmi/subscriptions",
  "organizations_url": "https://api.github.com/users/kkazmi/orgs",
  "repos_url": "https://api.github.com/users/kkazmi/repos",
  "events_url": "https://api.github.com/users/kkazmi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kkazmi/received_events",
  
  "name": "Kashif kazmi",
  "company": "DHS IT Solution",
  "blog": "http://kashifkazmi.great-site.net/",
  "location": "india",
  "email": null,
  "hireable": true,
  "bio": "Web Developer with 8.3 years of experience in designing and developing user interfaces, testing, debugging, and work on company websites, news portal E-commerce",
  "twitter_username": null,
  "public_repos": 43,
  "public_gists": 0,
  "followers": 1,
  "following": 9,
  "created_at": "2016-12-22T08:56:49Z",
  "updated_at": "2026-03-09T11:37:23Z"

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/login', (req, res) => { 
  res.send('<h1>Login Page</h1><form><input type="text" placeholder="Username"><br><input type="password" placeholder="Password"><br><button type="submit">Login</button></form>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1><p>This is the contact page.</p>')
})

app.get('/github', (req, res) => {
  res.json(databae)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
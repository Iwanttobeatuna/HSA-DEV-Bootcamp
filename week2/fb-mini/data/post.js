const casual = require('casual')
const userData = require('./users')

casual.define('post', ({userid}) => ({
    id: casual.uuid,
    user_id: userid,
    text: casual.text,
    likes: casual.integer(from = 0, to = 1000),
    postDate: casual.date(format = 'YYYY-MM-DD')
}))

const post = []

for (let i = 0; i < 20; ++i) {
    const userid  = casual.random_element(userData).id
    post.push(casual.post(userid))
  }
  
  module.exports = post
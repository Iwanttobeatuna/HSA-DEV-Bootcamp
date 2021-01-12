const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({user1id, user2id}) => ({
    id: casual.uuid,
    user1: user1id,
    user2: user2id,
    date: casual.date(format = 'YYYY-MM-DD'),
    acceptedFriends: casual.boolean,
}))

const friend = []

for (let i = 0; i < 20; ++i) {
    const user1id  = casual.random_element(userData).id
    const user2id = casual.random_element(userData).id
    friend.push(casual.friend(user1id,user2id))
}

module.exports = friend
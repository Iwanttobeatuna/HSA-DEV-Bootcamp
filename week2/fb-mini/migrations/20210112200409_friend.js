
exports.up = async knex => knex.schema.createTable('friend', table => {
    table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('user1').references('users.id')
    table.uuid('user2').references('users.id')
    table.date('date')
    table.boolean('acceptedFriends')
  
})

exports.down = async knex => knex.schema.dropTableIfExists('friend')

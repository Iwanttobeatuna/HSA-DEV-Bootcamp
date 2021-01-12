
exports.up = async knex => knex.schema.createTable('post', table => {
    table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()'))
    table.text('text').notNullable()
    table.integer('likes')
    table.date('postDate')
}) 

exports.down = async knex => knex.schema.dropTableIfExists('post')

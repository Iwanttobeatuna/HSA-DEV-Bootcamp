# Tables for fb-mini

## Requirements
From README.md:
The users table should contain personal data pertaining to a particular user, such as first & last name, date of birth, password, a short bio, etc. 
The posts table (we'll just do text-only posts for now) should store a string of text, a date posted, and the number of likes. 
The friends table tracks data pertaining to an individual "friendship"--this means it should store the user ID of the "requestor" and "requested", a date requested, a status (whether it has been accepted/declined/requested), and anything else you want associated with a friendship.

## Table 1: Users
Users table will contain 4 columns:
- id (table.uuid('')) || type: id || primary key
- name (table.string('')) || type: string
- email (table.text('')) || type: text
- password (table.text('')) || type: text
- date of birth (table.date('')) || type:date
- bio (table.text('')) || type: text

## Table 2: Friends
Friends table will contain 2 columns:
- id || type: id 
- user_id || type: id ||[Reference table 1: id]
- friends || type: id || [Reference table 1: id]
- status || type: enum || table.enum(‘friendshipType’, [‘REQUESTED', 'ACCEPTED'])
- date || type: date || table.date('')

## Table 3: Posts
Posts table will contain 2 columns:
- user_id || type: id ||[Reference table 1 post_id]
- id || type: id 
- posts || type: text || table.text('')
- likes || type: integer || table.integer(‘likes’)
- date || type: date || table.date('')


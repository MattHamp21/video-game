# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Game.destroy_all
Character.destroy_all


g1 = Game.create(name:'game 1', year:2016)
g2 = Game.create(name:'game 2', year:2017)

Character.create(name:'chr 1', age:20, game_id:g1.id)

g2.characters.create(name:'chr2', age:25)
g1.characters.create(name:'chr3', age:26)

puts "games in db #{Game.all.size}"
puts "characters in db #{Character.all.size}"
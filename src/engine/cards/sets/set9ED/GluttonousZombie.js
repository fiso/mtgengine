"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GluttonousZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Gluttonous Zombie", "Ninth Edition", "9ED");
  }
}

module.exports = GluttonousZombie;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GluttonousZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Gluttonous Zombie", "Eighth Edition", "8ED");
  }
}

module.exports = GluttonousZombie;

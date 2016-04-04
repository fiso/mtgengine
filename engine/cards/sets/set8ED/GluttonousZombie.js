"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GluttonousZombie extends Card {
  constructor(game) {
    super(game, "Gluttonous Zombie", "Eighth Edition", "8ED");
  }
}

module.exports = GluttonousZombie;

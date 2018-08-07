"use strict";
const Constants = require ("../../../Constants");
const GluttonousZombieBase = require("../set9ED/GluttonousZombie");

class GluttonousZombie extends GluttonousZombieBase {
  constructor (game) {
    super(game, "Gluttonous Zombie", "Onslaught", "ONS");
  }
}

module.exports = GluttonousZombie;

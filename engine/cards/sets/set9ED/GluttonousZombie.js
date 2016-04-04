"use strict";
const Constants = require ("../../../Constants");
const GluttonousZombieBase = require("../set8ED/GluttonousZombie");

class GluttonousZombie extends GluttonousZombieBase {
  constructor(game) {
    super(game, "Gluttonous Zombie", "Ninth Edition", "9ED");
  }
}

module.exports = GluttonousZombie;

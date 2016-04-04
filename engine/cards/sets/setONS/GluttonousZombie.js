"use strict";
const Constants = require ("../../../Constants");
const GluttonousZombieBase = require("../set8ED/GluttonousZombie");

class GluttonousZombie extends GluttonousZombieBase {
  constructor(game) {
    super(game, "Gluttonous Zombie", "Onslaught", "ONS");
  }
}

module.exports = GluttonousZombie;

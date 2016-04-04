"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GluttonousZombieBase = require("../set8ED/GluttonousZombie.js");

class GluttonousZombie extends GluttonousZombieBase {
  constructor(game) {
    super(game, "Gluttonous Zombie", "Onslaught", "ONS");
  }
}

module.exports = GluttonousZombie;

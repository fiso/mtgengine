"use strict";
const Constants = require ("../../../Constants");
const GravebaneZombieBase = require("../set6ED/GravebaneZombie");

class GravebaneZombie extends GravebaneZombieBase {
  constructor(game) {
    super(game, "Gravebane Zombie", "Mirage", "MIR");
  }
}

module.exports = GravebaneZombie;

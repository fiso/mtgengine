"use strict";
const Constants = require ("../../../Constants");
const DragonlordDromokaBase = require("../setDTK/DragonlordDromoka");

class DragonlordDromoka extends DragonlordDromokaBase {
  constructor (game) {
    super(game, "Dragonlord Dromoka", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DragonlordDromoka;

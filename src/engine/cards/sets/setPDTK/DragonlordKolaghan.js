"use strict";
const Constants = require ("../../../Constants");
const DragonlordKolaghanBase = require("../setDTK/DragonlordKolaghan");

class DragonlordKolaghan extends DragonlordKolaghanBase {
  constructor (game) {
    super(game, "Dragonlord Kolaghan", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DragonlordKolaghan;

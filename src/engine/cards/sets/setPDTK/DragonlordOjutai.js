"use strict";
const Constants = require ("../../../Constants");
const DragonlordOjutaiBase = require("../setDTK/DragonlordOjutai");

class DragonlordOjutai extends DragonlordOjutaiBase {
  constructor (game) {
    super(game, "Dragonlord Ojutai", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DragonlordOjutai;

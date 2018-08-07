"use strict";
const Constants = require ("../../../Constants");
const DragonlordAtarkaBase = require("../setDTK/DragonlordAtarka");

class DragonlordAtarka extends DragonlordAtarkaBase {
  constructor (game) {
    super(game, "Dragonlord Atarka", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DragonlordAtarka;

"use strict";
const Constants = require ("../../../Constants");
const DragonlordSilumgarBase = require("../setDTK/DragonlordSilumgar");

class DragonlordSilumgar extends DragonlordSilumgarBase {
  constructor (game) {
    super(game, "Dragonlord Silumgar", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DragonlordSilumgar;

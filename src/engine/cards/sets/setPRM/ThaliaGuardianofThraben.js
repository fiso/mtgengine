"use strict";
const Constants = require ("../../../Constants");
const ThaliaGuardianofThrabenBase = require("../setA25/ThaliaGuardianofThraben");

class ThaliaGuardianofThraben extends ThaliaGuardianofThrabenBase {
  constructor (game) {
    super(game, "Thalia, Guardian of Thraben", "Magic Online Promos", "PRM");
  }
}

module.exports = ThaliaGuardianofThraben;

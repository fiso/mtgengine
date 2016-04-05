"use strict";
const Constants = require ("../../../Constants");
const OrzhovCluestoneBase = require("../setC15/OrzhovCluestone");

class OrzhovCluestone extends OrzhovCluestoneBase {
  constructor(game) {
    super(game, "Orzhov Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = OrzhovCluestone;

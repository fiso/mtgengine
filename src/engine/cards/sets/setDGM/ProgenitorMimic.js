"use strict";
const Constants = require ("../../../Constants");
const ProgenitorMimicBase = require("../setC16/ProgenitorMimic");

class ProgenitorMimic extends ProgenitorMimicBase {
  constructor (game) {
    super(game, "Progenitor Mimic", "Dragon's Maze", "DGM");
  }
}

module.exports = ProgenitorMimic;

"use strict";
const Constants = require ("../../../Constants");
const TurriIslandBase = require("../setPCA/TurriIsland");

class TurriIsland extends TurriIslandBase {
  constructor (game) {
    super(game, "Turri Island", "Planechase", "HOP");
  }
}

module.exports = TurriIsland;

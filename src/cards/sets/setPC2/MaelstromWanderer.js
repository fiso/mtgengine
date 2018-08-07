"use strict";
const Constants = require ("../../../Constants");
const MaelstromWandererBase = require("../setPCA/MaelstromWanderer");

class MaelstromWanderer extends MaelstromWandererBase {
  constructor (game) {
    super(game, "Maelstrom Wanderer", "Planechase 2012", "PC2");
  }
}

module.exports = MaelstromWanderer;

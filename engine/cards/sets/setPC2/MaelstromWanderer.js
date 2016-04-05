"use strict";
const Constants = require ("../../../Constants");
const MaelstromWandererBase = require("../setCM1/MaelstromWanderer");

class MaelstromWanderer extends MaelstromWandererBase {
  constructor(game) {
    super(game, "Maelstrom Wanderer", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MaelstromWanderer;

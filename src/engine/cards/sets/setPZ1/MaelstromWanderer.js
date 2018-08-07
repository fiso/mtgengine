"use strict";
const Constants = require ("../../../Constants");
const MaelstromWandererBase = require("../setPCA/MaelstromWanderer");

class MaelstromWanderer extends MaelstromWandererBase {
  constructor (game) {
    super(game, "Maelstrom Wanderer", "Legendary Cube", "PZ1");
  }
}

module.exports = MaelstromWanderer;

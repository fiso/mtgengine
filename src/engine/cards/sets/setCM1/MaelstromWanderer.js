"use strict";
const Constants = require ("../../../Constants");
const MaelstromWandererBase = require("../setPCA/MaelstromWanderer");

class MaelstromWanderer extends MaelstromWandererBase {
  constructor (game) {
    super(game, "Maelstrom Wanderer", "Commander's Arsenal", "CM1");
  }
}

module.exports = MaelstromWanderer;

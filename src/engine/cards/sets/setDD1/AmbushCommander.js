"use strict";
const Constants = require ("../../../Constants");
const AmbushCommanderBase = require("../setEVG/AmbushCommander");

class AmbushCommander extends AmbushCommanderBase {
  constructor (game) {
    super(game, "Ambush Commander", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = AmbushCommander;

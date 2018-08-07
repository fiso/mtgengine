"use strict";
const Constants = require ("../../../Constants");
const RakdosPitDragonBase = require("../setJVC/RakdosPitDragon");

class RakdosPitDragon extends RakdosPitDragonBase {
  constructor (game) {
    super(game, "Rakdos Pit Dragon", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = RakdosPitDragon;

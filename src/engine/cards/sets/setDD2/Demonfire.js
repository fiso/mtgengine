"use strict";
const Constants = require ("../../../Constants");
const DemonfireBase = require("../setJVC/Demonfire");

class Demonfire extends DemonfireBase {
  constructor (game) {
    super(game, "Demonfire", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Demonfire;

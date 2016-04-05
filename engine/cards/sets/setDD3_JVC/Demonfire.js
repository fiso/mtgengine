"use strict";
const Constants = require ("../../../Constants");
const DemonfireBase = require("../setDIS/Demonfire");

class Demonfire extends DemonfireBase {
  constructor(game) {
    super(game, "Demonfire", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Demonfire;

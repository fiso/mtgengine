"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonfireBase = require("../setDIS/Demonfire.js");

class Demonfire extends DemonfireBase {
  constructor(game) {
    super(game, "Demonfire", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Demonfire;

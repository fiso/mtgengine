"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosPitDragonBase = require("../setDIS/RakdosPitDragon.js");

class RakdosPitDragon extends RakdosPitDragonBase {
  constructor(game) {
    super(game, "Rakdos Pit Dragon", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = RakdosPitDragon;

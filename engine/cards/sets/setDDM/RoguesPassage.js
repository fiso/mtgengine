"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoguesPassageBase = require("../setC15/RoguesPassage.js");

class RoguesPassage extends RoguesPassageBase {
  constructor(game) {
    super(game, "Rogue's Passage", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = RoguesPassage;

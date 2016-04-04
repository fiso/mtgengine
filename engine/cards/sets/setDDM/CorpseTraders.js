"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpseTradersBase = require("../setAVR/CorpseTraders.js");

class CorpseTraders extends CorpseTradersBase {
  constructor(game) {
    super(game, "Corpse Traders", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = CorpseTraders;

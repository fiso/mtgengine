"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseBlockade extends Card {
  constructor(game) {
    super(game, "Corpse Blockade", "Gatecrash", "GTC");
  }
}

module.exports = CorpseBlockade;

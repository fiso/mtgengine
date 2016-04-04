"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindlockOrb extends Card {
  constructor(game) {
    super(game, "Mindlock Orb", "Shards of Alara", "ALA");
  }
}

module.exports = MindlockOrb;

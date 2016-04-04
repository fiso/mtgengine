"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterDecoy extends Card {
  constructor(game) {
    super(game, "Master Decoy", "Battle Royale Box Set", "BRB");
  }
}

module.exports = MasterDecoy;

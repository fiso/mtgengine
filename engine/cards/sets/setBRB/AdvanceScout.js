"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdvanceScout extends Card {
  constructor(game) {
    super(game, "Advance Scout", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AdvanceScout;

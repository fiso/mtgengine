"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DangerousWager extends Card {
  constructor(game) {
    super(game, "Dangerous Wager", "Avacyn Restored", "AVR");
  }
}

module.exports = DangerousWager;

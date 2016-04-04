"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pestilence extends Card {
  constructor(game) {
    super(game, "Pestilence", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Pestilence;

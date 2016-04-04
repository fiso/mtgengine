"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Counterspell extends Card {
  constructor(game) {
    super(game, "Counterspell", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Counterspell;

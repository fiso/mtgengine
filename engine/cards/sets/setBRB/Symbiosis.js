"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Symbiosis extends Card {
  constructor(game) {
    super(game, "Symbiosis", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Symbiosis;

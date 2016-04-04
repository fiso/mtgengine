"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SadisticGlee extends Card {
  constructor(game) {
    super(game, "Sadistic Glee", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SadisticGlee;

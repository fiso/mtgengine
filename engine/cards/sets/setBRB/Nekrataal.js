"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nekrataal extends Card {
  constructor(game) {
    super(game, "Nekrataal", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Nekrataal;

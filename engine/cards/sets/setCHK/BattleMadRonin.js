"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleMadRonin extends Card {
  constructor(game) {
    super(game, "Battle-Mad Ronin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BattleMadRonin;

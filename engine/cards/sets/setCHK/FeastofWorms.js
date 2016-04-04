"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeastofWorms extends Card {
  constructor(game) {
    super(game, "Feast of Worms", "Champions of Kamigawa", "CHK");
  }
}

module.exports = FeastofWorms;

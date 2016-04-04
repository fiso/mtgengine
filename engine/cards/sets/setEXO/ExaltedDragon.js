"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExaltedDragon extends Card {
  constructor(game) {
    super(game, "Exalted Dragon", "Exodus", "EXO");
  }
}

module.exports = ExaltedDragon;

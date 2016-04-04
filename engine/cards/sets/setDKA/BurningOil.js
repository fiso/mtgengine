"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningOil extends Card {
  constructor(game) {
    super(game, "Burning Oil", "Dark Ascension", "DKA");
  }
}

module.exports = BurningOil;

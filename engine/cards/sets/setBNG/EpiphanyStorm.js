"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpiphanyStorm extends Card {
  constructor(game) {
    super(game, "Epiphany Storm", "Born of the Gods", "BNG");
  }
}

module.exports = EpiphanyStorm;

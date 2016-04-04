"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorizonScholar extends Card {
  constructor(game) {
    super(game, "Horizon Scholar", "Theros", "THS");
  }
}

module.exports = HorizonScholar;

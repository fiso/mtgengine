"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DecimatorWeb extends Card {
  constructor(game) {
    super(game, "Decimator Web", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DecimatorWeb;

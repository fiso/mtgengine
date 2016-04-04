"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FertileThicket extends Card {
  constructor(game) {
    super(game, "Fertile Thicket", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FertileThicket;

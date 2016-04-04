"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DispenseJustice extends Card {
  constructor(game) {
    super(game, "Dispense Justice", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DispenseJustice;

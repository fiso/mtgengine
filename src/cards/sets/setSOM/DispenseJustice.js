"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispenseJustice extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispense Justice", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DispenseJustice;

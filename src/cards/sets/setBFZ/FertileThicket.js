"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FertileThicket extends UnimplementedCard {
  constructor(game) {
    super(game, "Fertile Thicket", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FertileThicket;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Interdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Interdict", "Tempest", "TMP");
  }
}

module.exports = Interdict;

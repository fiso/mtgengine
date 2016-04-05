"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingSlateback extends UnimplementedCard {
  constructor(game) {
    super(game, "Charging Slateback", "Onslaught", "ONS");
  }
}

module.exports = ChargingSlateback;

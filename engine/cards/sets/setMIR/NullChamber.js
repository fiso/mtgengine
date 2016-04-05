"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Null Chamber", "Mirage", "MIR");
  }
}

module.exports = NullChamber;

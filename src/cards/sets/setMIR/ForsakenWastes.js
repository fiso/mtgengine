"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForsakenWastes extends UnimplementedCard {
  constructor(game) {
    super(game, "Forsaken Wastes", "Mirage", "MIR");
  }
}

module.exports = ForsakenWastes;

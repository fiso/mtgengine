"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForsakenDrifters extends UnimplementedCard {
  constructor(game) {
    super(game, "Forsaken Drifters", "Born of the Gods", "BNG");
  }
}

module.exports = ForsakenDrifters;

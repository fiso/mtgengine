"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForcedAdaptation extends UnimplementedCard {
  constructor (game) {
    super(game, "Forced Adaptation", "Gatecrash", "GTC");
  }
}

module.exports = ForcedAdaptation;

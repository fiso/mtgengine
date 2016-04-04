"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasEmbrace extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = GaeasEmbrace;

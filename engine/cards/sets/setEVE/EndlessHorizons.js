"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessHorizons extends UnimplementedCard {
  constructor(game) {
    super(game, "Endless Horizons", "Eventide", "EVE");
  }
}

module.exports = EndlessHorizons;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WipeClean extends UnimplementedCard {
  constructor(game) {
    super(game, "Wipe Clean", "Scourge", "SCG");
  }
}

module.exports = WipeClean;

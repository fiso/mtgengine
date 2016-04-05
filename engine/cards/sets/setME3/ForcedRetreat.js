"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForcedRetreat extends UnimplementedCard {
  constructor(game) {
    super(game, "Forced Retreat", "Masters Edition III", "ME3");
  }
}

module.exports = ForcedRetreat;

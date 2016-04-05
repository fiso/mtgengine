"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BayouDragonfly extends UnimplementedCard {
  constructor(game) {
    super(game, "Bayou Dragonfly", "Tempest", "TMP");
  }
}

module.exports = BayouDragonfly;

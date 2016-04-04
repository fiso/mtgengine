"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExpeditionEnvoy extends UnimplementedCard {
  constructor(game) {
    super(game, "Expedition Envoy", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ExpeditionEnvoy;

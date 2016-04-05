"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonGatekeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Loxodon Gatekeeper", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LoxodonGatekeeper;

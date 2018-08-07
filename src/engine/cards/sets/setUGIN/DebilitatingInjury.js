"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DebilitatingInjury extends UnimplementedCard {
  constructor (game) {
    super(game, "Debilitating Injury", "Ugin's Fate", "UGIN");
  }
}

module.exports = DebilitatingInjury;

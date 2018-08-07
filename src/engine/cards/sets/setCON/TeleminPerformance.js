"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeleminPerformance extends UnimplementedCard {
  constructor (game) {
    super(game, "Telemin Performance", "Conflux", "CON");
  }
}

module.exports = TeleminPerformance;

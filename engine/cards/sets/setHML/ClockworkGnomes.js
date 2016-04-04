"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkGnomes extends UnimplementedCard {
  constructor(game) {
    super(game, "Clockwork Gnomes", "Homelands", "HML");
  }
}

module.exports = ClockworkGnomes;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkGnomes extends Card {
  constructor(game) {
    super(game, "Clockwork Gnomes", "Homelands", "HML");
  }
}

module.exports = ClockworkGnomes;

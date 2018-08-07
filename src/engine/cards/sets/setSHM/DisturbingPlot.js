"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisturbingPlot extends UnimplementedCard {
  constructor (game) {
    super(game, "Disturbing Plot", "Shadowmoor", "SHM");
  }
}

module.exports = DisturbingPlot;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GridMonitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Grid Monitor", "Mirrodin", "MRD");
  }
}

module.exports = GridMonitor;

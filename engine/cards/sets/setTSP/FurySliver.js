"use strict";
const Constants = require ("../../../Constants");
const FurySliverBase = require("../setH09/FurySliver");

class FurySliver extends FurySliverBase {
  constructor(game) {
    super(game, "Fury Sliver", "Time Spiral", "TSP");
  }
}

module.exports = FurySliver;

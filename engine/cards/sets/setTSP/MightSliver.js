"use strict";
const Constants = require ("../../../Constants");
const MightSliverBase = require("../setH09/MightSliver");

class MightSliver extends MightSliverBase {
  constructor(game) {
    super(game, "Might Sliver", "Time Spiral", "TSP");
  }
}

module.exports = MightSliver;

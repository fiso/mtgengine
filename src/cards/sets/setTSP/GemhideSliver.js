"use strict";
const Constants = require ("../../../Constants");
const GemhideSliverBase = require("../setH09/GemhideSliver");

class GemhideSliver extends GemhideSliverBase {
  constructor(game) {
    super(game, "Gemhide Sliver", "Time Spiral", "TSP");
  }
}

module.exports = GemhideSliver;

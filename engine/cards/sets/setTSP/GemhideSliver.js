"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GemhideSliverBase = require("../setH09/GemhideSliver.js");

class GemhideSliver extends GemhideSliverBase {
  constructor(game) {
    super(game, "Gemhide Sliver", "Time Spiral", "TSP");
  }
}

module.exports = GemhideSliver;

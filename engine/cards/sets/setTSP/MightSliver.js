"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightSliverBase = require("../setH09/MightSliver.js");

class MightSliver extends MightSliverBase {
  constructor(game) {
    super(game, "Might Sliver", "Time Spiral", "TSP");
  }
}

module.exports = MightSliver;

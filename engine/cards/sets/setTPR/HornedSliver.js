"use strict";
const Constants = require ("../../../Constants");
const HornedSliverBase = require("../setTMP/HornedSliver");

class HornedSliver extends HornedSliverBase {
  constructor(game) {
    super(game, "Horned Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = HornedSliver;

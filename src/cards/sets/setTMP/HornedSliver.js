"use strict";
const Constants = require ("../../../Constants");
const HornedSliverBase = require("../setTPR/HornedSliver");

class HornedSliver extends HornedSliverBase {
  constructor (game) {
    super(game, "Horned Sliver", "Tempest", "TMP");
  }
}

module.exports = HornedSliver;

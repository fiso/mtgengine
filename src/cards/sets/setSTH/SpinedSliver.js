"use strict";
const Constants = require ("../../../Constants");
const SpinedSliverBase = require("../setTPR/SpinedSliver");

class SpinedSliver extends SpinedSliverBase {
  constructor (game) {
    super(game, "Spined Sliver", "Stronghold", "STH");
  }
}

module.exports = SpinedSliver;

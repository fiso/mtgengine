"use strict";
const Constants = require ("../../../Constants");
const SpinedSliverBase = require("../setH09/SpinedSliver");

class SpinedSliver extends SpinedSliverBase {
  constructor (game) {
    super(game, "Spined Sliver", "Stronghold", "STH");
  }
}

module.exports = SpinedSliver;

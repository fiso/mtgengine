"use strict";
const Constants = require ("../../../Constants");
const VictualSliverBase = require("../setTPR/VictualSliver");

class VictualSliver extends VictualSliverBase {
  constructor (game) {
    super(game, "Victual Sliver", "Stronghold", "STH");
  }
}

module.exports = VictualSliver;

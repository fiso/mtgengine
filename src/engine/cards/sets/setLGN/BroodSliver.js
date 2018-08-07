"use strict";
const Constants = require ("../../../Constants");
const BroodSliverBase = require("../setH09/BroodSliver");

class BroodSliver extends BroodSliverBase {
  constructor (game) {
    super(game, "Brood Sliver", "Legions", "LGN");
  }
}

module.exports = BroodSliver;

"use strict";
const Constants = require ("../../../Constants");
const ClotSliverBase = require("../setH09/ClotSliver");

class ClotSliver extends ClotSliverBase {
  constructor (game) {
    super(game, "Clot Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = ClotSliver;

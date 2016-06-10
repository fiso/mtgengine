"use strict";
const Constants = require ("../../../Constants");
const BarbedSliverBase = require("../setH09/BarbedSliver");

class BarbedSliver extends BarbedSliverBase {
  constructor (game) {
    super(game, "Barbed Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = BarbedSliver;

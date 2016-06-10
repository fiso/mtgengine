"use strict";
const Constants = require ("../../../Constants");
const AcidicSliverBase = require("../setH09/AcidicSliver");

class AcidicSliver extends AcidicSliverBase {
  constructor (game) {
    super(game, "Acidic Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = AcidicSliver;

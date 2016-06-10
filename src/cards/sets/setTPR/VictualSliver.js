"use strict";
const Constants = require ("../../../Constants");
const VictualSliverBase = require("../setH09/VictualSliver");

class VictualSliver extends VictualSliverBase {
  constructor (game) {
    super(game, "Victual Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = VictualSliver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClotSliverBase = require("../setH09/ClotSliver.js");

class ClotSliver extends ClotSliverBase {
  constructor(game) {
    super(game, "Clot Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = ClotSliver;

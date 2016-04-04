"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcidicSliverBase = require("../setH09/AcidicSliver.js");

class AcidicSliver extends AcidicSliverBase {
  constructor(game) {
    super(game, "Acidic Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = AcidicSliver;

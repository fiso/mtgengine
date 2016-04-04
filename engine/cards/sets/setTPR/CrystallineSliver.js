"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrystallineSliverBase = require("../setpFNM/CrystallineSliver.js");

class CrystallineSliver extends CrystallineSliverBase {
  constructor(game) {
    super(game, "Crystalline Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = CrystallineSliver;

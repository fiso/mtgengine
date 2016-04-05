"use strict";
const Constants = require ("../../../Constants");
const ArmorSliverBase = require("../setH09/ArmorSliver");

class ArmorSliver extends ArmorSliverBase {
  constructor(game) {
    super(game, "Armor Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = ArmorSliver;

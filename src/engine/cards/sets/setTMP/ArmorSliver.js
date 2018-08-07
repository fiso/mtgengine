"use strict";
const Constants = require ("../../../Constants");
const ArmorSliverBase = require("../setTPR/ArmorSliver");

class ArmorSliver extends ArmorSliverBase {
  constructor (game) {
    super(game, "Armor Sliver", "Tempest", "TMP");
  }
}

module.exports = ArmorSliver;

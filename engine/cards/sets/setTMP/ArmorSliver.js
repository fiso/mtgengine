"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmorSliverBase = require("../setH09/ArmorSliver.js");

class ArmorSliver extends ArmorSliverBase {
  constructor(game) {
    super(game, "Armor Sliver", "Tempest", "TMP");
  }
}

module.exports = ArmorSliver;

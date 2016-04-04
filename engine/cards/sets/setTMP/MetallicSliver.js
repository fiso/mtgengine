"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MetallicSliverBase = require("../setH09/MetallicSliver.js");

class MetallicSliver extends MetallicSliverBase {
  constructor(game) {
    super(game, "Metallic Sliver", "Tempest", "TMP");
  }
}

module.exports = MetallicSliver;

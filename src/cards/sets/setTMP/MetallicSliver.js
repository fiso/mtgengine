"use strict";
const Constants = require ("../../../Constants");
const MetallicSliverBase = require("../setH09/MetallicSliver");

class MetallicSliver extends MetallicSliverBase {
  constructor(game) {
    super(game, "Metallic Sliver", "Tempest", "TMP");
  }
}

module.exports = MetallicSliver;

"use strict";
const Constants = require ("../../../Constants");
const HeartSliverBase = require("../setH09/HeartSliver");

class HeartSliver extends HeartSliverBase {
  constructor(game) {
    super(game, "Heart Sliver", "Tempest", "TMP");
  }
}

module.exports = HeartSliver;

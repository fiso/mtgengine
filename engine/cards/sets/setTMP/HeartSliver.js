"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartSliverBase = require("../setH09/HeartSliver.js");

class HeartSliver extends HeartSliverBase {
  constructor(game) {
    super(game, "Heart Sliver", "Tempest", "TMP");
  }
}

module.exports = HeartSliver;

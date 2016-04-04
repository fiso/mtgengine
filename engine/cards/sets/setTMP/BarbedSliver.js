"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarbedSliverBase = require("../setH09/BarbedSliver.js");

class BarbedSliver extends BarbedSliverBase {
  constructor(game) {
    super(game, "Barbed Sliver", "Tempest", "TMP");
  }
}

module.exports = BarbedSliver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WingedSliverBase = require("../setH09/WingedSliver.js");

class WingedSliver extends WingedSliverBase {
  constructor(game) {
    super(game, "Winged Sliver", "Tempest", "TMP");
  }
}

module.exports = WingedSliver;

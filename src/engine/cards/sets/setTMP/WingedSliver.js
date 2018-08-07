"use strict";
const Constants = require ("../../../Constants");
const WingedSliverBase = require("../setTPR/WingedSliver");

class WingedSliver extends WingedSliverBase {
  constructor (game) {
    super(game, "Winged Sliver", "Tempest", "TMP");
  }
}

module.exports = WingedSliver;

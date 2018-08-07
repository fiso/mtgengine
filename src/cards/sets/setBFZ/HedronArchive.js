"use strict";
const Constants = require ("../../../Constants");
const HedronArchiveBase = require("../setC18/HedronArchive");

class HedronArchive extends HedronArchiveBase {
  constructor (game) {
    super(game, "Hedron Archive", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HedronArchive;

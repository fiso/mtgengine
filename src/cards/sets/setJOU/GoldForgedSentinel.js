"use strict";
const Constants = require ("../../../Constants");
const GoldForgedSentinelBase = require("../setBBD/GoldForgedSentinel");

class GoldForgedSentinel extends GoldForgedSentinelBase {
  constructor (game) {
    super(game, "Gold-Forged Sentinel", "Journey into Nyx", "JOU");
  }
}

module.exports = GoldForgedSentinel;

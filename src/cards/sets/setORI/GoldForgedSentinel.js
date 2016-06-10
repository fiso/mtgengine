"use strict";
const Constants = require ("../../../Constants");
const GoldForgedSentinelBase = require("../setJOU/GoldForgedSentinel");

class GoldForgedSentinel extends GoldForgedSentinelBase {
  constructor (game) {
    super(game, "Gold-Forged Sentinel", "Magic Origins", "ORI");
  }
}

module.exports = GoldForgedSentinel;

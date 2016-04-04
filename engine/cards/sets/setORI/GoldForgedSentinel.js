"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoldForgedSentinelBase = require("../setJOU/GoldForgedSentinel.js");

class GoldForgedSentinel extends GoldForgedSentinelBase {
  constructor(game) {
    super(game, "Gold-Forged Sentinel", "Magic Origins", "ORI");
  }
}

module.exports = GoldForgedSentinel;

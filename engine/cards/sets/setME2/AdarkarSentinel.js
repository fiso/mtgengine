"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AdarkarSentinelBase = require("../setICE/AdarkarSentinel.js");

class AdarkarSentinel extends AdarkarSentinelBase {
  constructor(game) {
    super(game, "Adarkar Sentinel", "Masters Edition II", "ME2");
  }
}

module.exports = AdarkarSentinel;

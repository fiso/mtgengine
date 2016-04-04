"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScaleguardSentinelsBase = require("../setDTK/ScaleguardSentinels.js");

class ScaleguardSentinels extends ScaleguardSentinelsBase {
  constructor(game) {
    super(game, "Scaleguard Sentinels", "Magic Game Day", "pMGD");
  }
}

module.exports = ScaleguardSentinels;

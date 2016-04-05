"use strict";
const Constants = require ("../../../Constants");
const ScaleguardSentinelsBase = require("../setDTK/ScaleguardSentinels");

class ScaleguardSentinels extends ScaleguardSentinelsBase {
  constructor(game) {
    super(game, "Scaleguard Sentinels", "Magic Game Day", "pMGD");
  }
}

module.exports = ScaleguardSentinels;

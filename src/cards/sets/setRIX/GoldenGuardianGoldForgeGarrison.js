"use strict";
const Constants = require ("../../../Constants");
const GoldenGuardianGoldForgeGarrisonBase = require("../setPRIX/GoldenGuardianGoldForgeGarrison");

class GoldenGuardianGoldForgeGarrison extends GoldenGuardianGoldForgeGarrisonBase {
  constructor (game) {
    super(game, "Golden Guardian // Gold-Forge Garrison", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GoldenGuardianGoldForgeGarrison;

"use strict";
const Constants = require ("../../../Constants");
const ArmoryGuardBase = require("../setDDL/ArmoryGuard");

class ArmoryGuard extends ArmoryGuardBase {
  constructor(game) {
    super(game, "Armory Guard", "Return to Ravnica", "RTR");
  }
}

module.exports = ArmoryGuard;

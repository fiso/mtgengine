"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmoryGuardBase = require("../setDDL/ArmoryGuard.js");

class ArmoryGuard extends ArmoryGuardBase {
  constructor(game) {
    super(game, "Armory Guard", "Return to Ravnica", "RTR");
  }
}

module.exports = ArmoryGuard;

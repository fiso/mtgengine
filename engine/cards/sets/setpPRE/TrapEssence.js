"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrapEssenceBase = require("../setKTK/TrapEssence.js");

class TrapEssence extends TrapEssenceBase {
  constructor(game) {
    super(game, "Trap Essence", "Prerelease Events", "pPRE");
  }
}

module.exports = TrapEssence;

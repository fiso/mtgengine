"use strict";
const Constants = require ("../../../Constants");
const SkarrgtheRagePitsBase = require("../setDDL/SkarrgtheRagePits");

class SkarrgtheRagePits extends SkarrgtheRagePitsBase {
  constructor(game) {
    super(game, "Skarrg, the Rage Pits", "Guildpact", "GPT");
  }
}

module.exports = SkarrgtheRagePits;

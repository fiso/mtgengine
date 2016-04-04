"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkarrgtheRagePitsBase = require("../setDDL/SkarrgtheRagePits.js");

class SkarrgtheRagePits extends SkarrgtheRagePitsBase {
  constructor(game) {
    super(game, "Skarrg, the Rage Pits", "Guildpact", "GPT");
  }
}

module.exports = SkarrgtheRagePits;

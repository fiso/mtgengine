"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SiegeDragonBase = require("../setM15/SiegeDragon.js");

class SiegeDragon extends SiegeDragonBase {
  constructor(game) {
    super(game, "Siege Dragon", "Prerelease Events", "pPRE");
  }
}

module.exports = SiegeDragon;

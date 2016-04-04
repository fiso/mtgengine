"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CratersClawsBase = require("../setKTK/CratersClaws.js");

class CratersClaws extends CratersClawsBase {
  constructor(game) {
    super(game, "Crater's Claws", "Prerelease Events", "pPRE");
  }
}

module.exports = CratersClaws;

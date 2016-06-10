"use strict";
const Constants = require ("../../../Constants");
const CratersClawsBase = require("../setKTK/CratersClaws");

class CratersClaws extends CratersClawsBase {
  constructor (game) {
    super(game, "Crater's Claws", "Prerelease Events", "pPRE");
  }
}

module.exports = CratersClaws;

"use strict";
const Constants = require ("../../../Constants");
const OvertakerBase = require("../setMMQ/Overtaker");

class Overtaker extends OvertakerBase {
  constructor (game) {
    super(game, "Overtaker", "Prerelease Events", "pPRE");
  }
}

module.exports = Overtaker;

"use strict";
const Constants = require ("../../../Constants");
const HornofDeafeningBase = require("../setME4/HornofDeafening");

class HornofDeafening extends HornofDeafeningBase {
  constructor (game) {
    super(game, "Horn of Deafening", "Chronicles", "CHR");
  }
}

module.exports = HornofDeafening;

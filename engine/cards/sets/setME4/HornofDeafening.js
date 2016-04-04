"use strict";
const Constants = require ("../../../Constants");
const HornofDeafeningBase = require("../setCHR/HornofDeafening");

class HornofDeafening extends HornofDeafeningBase {
  constructor(game) {
    super(game, "Horn of Deafening", "Masters Edition IV", "ME4");
  }
}

module.exports = HornofDeafening;

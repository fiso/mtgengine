"use strict";
const Constants = require ("../../../Constants");
const HornofDeafeningBase = require("../setCHR/HornofDeafening");

class HornofDeafening extends HornofDeafeningBase {
  constructor(game) {
    super(game, "Horn of Deafening", "Legends", "LEG");
  }
}

module.exports = HornofDeafening;

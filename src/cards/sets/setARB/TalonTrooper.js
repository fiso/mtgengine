"use strict";
const Constants = require ("../../../Constants");
const TalonTrooperBase = require("../setMM3/TalonTrooper");

class TalonTrooper extends TalonTrooperBase {
  constructor (game) {
    super(game, "Talon Trooper", "Alara Reborn", "ARB");
  }
}

module.exports = TalonTrooper;

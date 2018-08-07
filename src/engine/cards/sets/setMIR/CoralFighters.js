"use strict";
const Constants = require ("../../../Constants");
const CoralFightersBase = require("../setDDI/CoralFighters");

class CoralFighters extends CoralFightersBase {
  constructor (game) {
    super(game, "Coral Fighters", "Mirage", "MIR");
  }
}

module.exports = CoralFighters;

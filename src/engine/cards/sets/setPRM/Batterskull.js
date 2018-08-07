"use strict";
const Constants = require ("../../../Constants");
const BatterskullBase = require("../setNPH/Batterskull");

class Batterskull extends BatterskullBase {
  constructor (game) {
    super(game, "Batterskull", "Magic Online Promos", "PRM");
  }
}

module.exports = Batterskull;

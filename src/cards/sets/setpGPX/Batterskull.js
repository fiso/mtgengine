"use strict";
const Constants = require ("../../../Constants");
const BatterskullBase = require("../setNPH/Batterskull");

class Batterskull extends BatterskullBase {
  constructor (game) {
    super(game, "Batterskull", "Grand Prix Promos", "PGPX");
  }
}

module.exports = Batterskull;

"use strict";
const Constants = require ("../../../Constants");
const PyroblastBase = require("../setEMA/Pyroblast");

class Pyroblast extends PyroblastBase {
  constructor (game) {
    super(game, "Pyroblast", "Masters Edition", "MED");
  }
}

module.exports = Pyroblast;

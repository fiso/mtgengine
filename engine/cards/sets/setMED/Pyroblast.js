"use strict";
const Constants = require ("../../../Constants");
const PyroblastBase = require("../set5ED/Pyroblast");

class Pyroblast extends PyroblastBase {
  constructor(game) {
    super(game, "Pyroblast", "Masters Edition", "MED");
  }
}

module.exports = Pyroblast;

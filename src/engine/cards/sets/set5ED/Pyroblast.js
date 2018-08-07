"use strict";
const Constants = require ("../../../Constants");
const PyroblastBase = require("../setEMA/Pyroblast");

class Pyroblast extends PyroblastBase {
  constructor (game) {
    super(game, "Pyroblast", "Fifth Edition", "5ED");
  }
}

module.exports = Pyroblast;

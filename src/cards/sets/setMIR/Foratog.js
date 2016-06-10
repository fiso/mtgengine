"use strict";
const Constants = require ("../../../Constants");
const ForatogBase = require("../set8ED/Foratog");

class Foratog extends ForatogBase {
  constructor (game) {
    super(game, "Foratog", "Mirage", "MIR");
  }
}

module.exports = Foratog;

"use strict";
const Constants = require ("../../../Constants");
const TibalttheFiendBloodedBase = require("../setDDK/TibalttheFiendBlooded");

class TibalttheFiendBlooded extends TibalttheFiendBloodedBase {
  constructor (game) {
    super(game, "Tibalt, the Fiend-Blooded", "Avacyn Restored", "AVR");
  }
}

module.exports = TibalttheFiendBlooded;

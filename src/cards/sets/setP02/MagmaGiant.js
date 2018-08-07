"use strict";
const Constants = require ("../../../Constants");
const MagmaGiantBase = require("../setCM2/MagmaGiant");

class MagmaGiant extends MagmaGiantBase {
  constructor (game) {
    super(game, "Magma Giant", "Portal Second Age", "P02");
  }
}

module.exports = MagmaGiant;

"use strict";
const Constants = require ("../../../Constants");
const NumottheDevastatorBase = require("../setOCMD/NumottheDevastator");

class NumottheDevastator extends NumottheDevastatorBase {
  constructor (game) {
    super(game, "Numot, the Devastator", "Commander 2011", "CMD");
  }
}

module.exports = NumottheDevastator;

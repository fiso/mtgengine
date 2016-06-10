"use strict";
const Constants = require ("../../../Constants");
const NumottheDevastatorBase = require("../setCMD/NumottheDevastator");

class NumottheDevastator extends NumottheDevastatorBase {
  constructor (game) {
    super(game, "Numot, the Devastator", "Planar Chaos", "PLC");
  }
}

module.exports = NumottheDevastator;

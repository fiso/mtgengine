"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setM15/Dissipate");

class Dissipate extends DissipateBase {
  constructor (game) {
    super(game, "Dissipate", "Mirage", "MIR");
  }
}

module.exports = Dissipate;

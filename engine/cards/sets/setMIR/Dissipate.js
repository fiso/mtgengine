"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setDDJ/Dissipate");

class Dissipate extends DissipateBase {
  constructor(game) {
    super(game, "Dissipate", "Mirage", "MIR");
  }
}

module.exports = Dissipate;

"use strict";
const Constants = require ("../../../Constants");
const RoughBase = require("../setC13/Rough");

class Rough extends RoughBase {
  constructor (game) {
    super(game, "Rough", "Planar Chaos", "PLC");
  }
}

module.exports = Rough;

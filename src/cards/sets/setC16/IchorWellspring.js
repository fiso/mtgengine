"use strict";
const Constants = require ("../../../Constants");
const IchorWellspringBase = require("../setCM2/IchorWellspring");

class IchorWellspring extends IchorWellspringBase {
  constructor (game) {
    super(game, "Ichor Wellspring", "Commander 2016", "C16");
  }
}

module.exports = IchorWellspring;

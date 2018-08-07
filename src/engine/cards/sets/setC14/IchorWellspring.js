"use strict";
const Constants = require ("../../../Constants");
const IchorWellspringBase = require("../setCM2/IchorWellspring");

class IchorWellspring extends IchorWellspringBase {
  constructor (game) {
    super(game, "Ichor Wellspring", "Commander 2014", "C14");
  }
}

module.exports = IchorWellspring;

"use strict";
const Constants = require ("../../../Constants");
const IchorWellspringBase = require("../setCM2/IchorWellspring");

class IchorWellspring extends IchorWellspringBase {
  constructor (game) {
    super(game, "Ichor Wellspring", "Mirrodin Besieged", "MBS");
  }
}

module.exports = IchorWellspring;

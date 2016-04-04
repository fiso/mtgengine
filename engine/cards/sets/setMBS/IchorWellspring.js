"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IchorWellspringBase = require("../setC14/IchorWellspring.js");

class IchorWellspring extends IchorWellspringBase {
  constructor(game) {
    super(game, "Ichor Wellspring", "Mirrodin Besieged", "MBS");
  }
}

module.exports = IchorWellspring;

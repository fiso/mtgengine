"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightwingShadeBase = require("../setM11/NightwingShade.js");

class NightwingShade extends NightwingShadeBase {
  constructor(game) {
    super(game, "Nightwing Shade", "Magic 2014 Core Set", "M14");
  }
}

module.exports = NightwingShade;

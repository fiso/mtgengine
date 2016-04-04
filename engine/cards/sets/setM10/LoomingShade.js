"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoomingShadeBase = require("../set8ED/LoomingShade.js");

class LoomingShade extends LoomingShadeBase {
  constructor(game) {
    super(game, "Looming Shade", "Magic 2010", "M10");
  }
}

module.exports = LoomingShade;

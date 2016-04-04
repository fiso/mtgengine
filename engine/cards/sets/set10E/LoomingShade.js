"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoomingShadeBase = require("../set8ED/LoomingShade.js");

class LoomingShade extends LoomingShadeBase {
  constructor(game) {
    super(game, "Looming Shade", "Tenth Edition", "10E");
  }
}

module.exports = LoomingShade;

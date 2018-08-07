"use strict";
const Constants = require ("../../../Constants");
const ThopterFoundryBase = require("../setC16/ThopterFoundry");

class ThopterFoundry extends ThopterFoundryBase {
  constructor (game) {
    super(game, "Thopter Foundry", "Commander 2013", "C13");
  }
}

module.exports = ThopterFoundry;

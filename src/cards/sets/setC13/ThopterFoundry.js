"use strict";
const Constants = require ("../../../Constants");
const ThopterFoundryBase = require("../setARB/ThopterFoundry");

class ThopterFoundry extends ThopterFoundryBase {
  constructor(game) {
    super(game, "Thopter Foundry", "Commander 2013 Edition", "C13");
  }
}

module.exports = ThopterFoundry;

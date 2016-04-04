"use strict";
const Constants = require ("../../../Constants");
const SunwebBase = require("../set6ED/Sunweb");

class Sunweb extends SunwebBase {
  constructor(game) {
    super(game, "Sunweb", "Mirage", "MIR");
  }
}

module.exports = Sunweb;

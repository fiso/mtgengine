"use strict";
const Constants = require ("../../../Constants");
const SunwebBase = require("../set8ED/Sunweb");

class Sunweb extends SunwebBase {
  constructor (game) {
    super(game, "Sunweb", "Seventh Edition", "7ED");
  }
}

module.exports = Sunweb;

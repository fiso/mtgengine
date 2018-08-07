"use strict";
const Constants = require ("../../../Constants");
const VerdantHavenBase = require("../setM15/VerdantHaven");

class VerdantHaven extends VerdantHavenBase {
  constructor (game) {
    super(game, "Verdant Haven", "Gatecrash", "GTC");
  }
}

module.exports = VerdantHaven;

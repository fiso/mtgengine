"use strict";
const Constants = require ("../../../Constants");
const VerdantHavenBase = require("../setM15/VerdantHaven");

class VerdantHaven extends VerdantHavenBase {
  constructor (game) {
    super(game, "Verdant Haven", "Magic 2014", "M14");
  }
}

module.exports = VerdantHaven;

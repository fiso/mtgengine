"use strict";
const Constants = require ("../../../Constants");
const SeaEagleBase = require("../set8ED/SeaEagle");

class SeaEagle extends SeaEagleBase {
  constructor (game) {
    super(game, "Sea Eagle", "Starter 2000", "S00");
  }
}

module.exports = SeaEagle;

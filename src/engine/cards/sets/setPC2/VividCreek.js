"use strict";
const Constants = require ("../../../Constants");
const VividCreekBase = require("../setC17/VividCreek");

class VividCreek extends VividCreekBase {
  constructor (game) {
    super(game, "Vivid Creek", "Planechase 2012", "PC2");
  }
}

module.exports = VividCreek;

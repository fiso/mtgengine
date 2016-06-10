"use strict";
const Constants = require ("../../../Constants");
const VividCreekBase = require("../setC13/VividCreek");

class VividCreek extends VividCreekBase {
  constructor (game) {
    super(game, "Vivid Creek", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = VividCreek;

"use strict";
const Constants = require ("../../../Constants");
const WhitemaneLionBase = require("../setA25/WhitemaneLion");

class WhitemaneLion extends WhitemaneLionBase {
  constructor (game) {
    super(game, "Whitemane Lion", "Eternal Masters", "EMA");
  }
}

module.exports = WhitemaneLion;

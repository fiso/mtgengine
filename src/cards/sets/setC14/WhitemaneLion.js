"use strict";
const Constants = require ("../../../Constants");
const WhitemaneLionBase = require("../setA25/WhitemaneLion");

class WhitemaneLion extends WhitemaneLionBase {
  constructor (game) {
    super(game, "Whitemane Lion", "Commander 2014", "C14");
  }
}

module.exports = WhitemaneLion;

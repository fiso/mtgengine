"use strict";
const Constants = require ("../../../Constants");
const WhitemaneLionBase = require("../setC14/WhitemaneLion");

class WhitemaneLion extends WhitemaneLionBase {
  constructor (game) {
    super(game, "Whitemane Lion", "Planar Chaos", "PLC");
  }
}

module.exports = WhitemaneLion;

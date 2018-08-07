"use strict";
const Constants = require ("../../../Constants");
const FrontierBivouacBase = require("../setC17/FrontierBivouac");

class FrontierBivouac extends FrontierBivouacBase {
  constructor (game) {
    super(game, "Frontier Bivouac", "Commander 2016", "C16");
  }
}

module.exports = FrontierBivouac;

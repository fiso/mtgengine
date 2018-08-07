"use strict";
const Constants = require ("../../../Constants");
const FrontierBivouacBase = require("../setC17/FrontierBivouac");

class FrontierBivouac extends FrontierBivouacBase {
  constructor (game) {
    super(game, "Frontier Bivouac", "Khans of Tarkir", "KTK");
  }
}

module.exports = FrontierBivouac;

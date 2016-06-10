"use strict";
const Constants = require ("../../../Constants");
const ArmoredGriffinBase = require("../setME2/ArmoredGriffin");

class ArmoredGriffin extends ArmoredGriffinBase {
  constructor (game) {
    super(game, "Armored Griffin", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ArmoredGriffin;

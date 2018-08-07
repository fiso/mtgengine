"use strict";
const Constants = require ("../../../Constants");
const ArmoredGriffinBase = require("../setPCA/ArmoredGriffin");

class ArmoredGriffin extends ArmoredGriffinBase {
  constructor (game) {
    super(game, "Armored Griffin", "Planechase 2012", "PC2");
  }
}

module.exports = ArmoredGriffin;

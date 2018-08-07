"use strict";
const Constants = require ("../../../Constants");
const ArmoredGriffinBase = require("../setPCA/ArmoredGriffin");

class ArmoredGriffin extends ArmoredGriffinBase {
  constructor (game) {
    super(game, "Armored Griffin", "Portal Second Age", "P02");
  }
}

module.exports = ArmoredGriffin;

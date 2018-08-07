"use strict";
const Constants = require ("../../../Constants");
const ArmoredGriffinBase = require("../setPCA/ArmoredGriffin");

class ArmoredGriffin extends ArmoredGriffinBase {
  constructor (game) {
    super(game, "Armored Griffin", "Masters Edition II", "ME2");
  }
}

module.exports = ArmoredGriffin;
